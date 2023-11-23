const express = require('express')
const app = express()
const port = 3000


const url = 'mongodb://localhost:27017/main';
const {MongoClient} = require('mongodb');
const client = new MongoClient(url);
client.connect();

app.use(express.json());


app.post('/movies', async (req, res) => {
    await client.db("main").collection("movies").insertOne(req.body);
    return res.status(201).send('movie created');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//
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
//
//
