const express = require('express')
const app = express()
const port = 3000

const url = 'mongodb://localhost:27017/main';
const {MongoClient} = require('mongodb');
const client = new MongoClient(url);

app.use(express.json());

const postDb = (name) => {
    app.post(`/${name}`, async (req, res) => {
        try {
            await client.connect();

            const database = client.db("main");
            const collection = database.collection(name);

            await collection.insertOne(req.body);

            return res.status(201).send(`${name} created`);
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).send('Internal Server Error');
        } finally {
            await client.close();
        }
    });
}

postDb("movies")
postDb("categories")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// const MOVIES = [{
//     _id: 1,
//     name: 1,
// }]
//
// app.get('/', function (req, res) {
//      res.send(MOVIES);
// });
//
//
// app.post('/', function (req, res) {
//     res.send('Got a POST request');
// });
//
//
// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user');
// });
//
//
// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user');
// });
