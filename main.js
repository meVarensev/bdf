import mongoose from 'mongoose';
import { Category, Movie, Movies } from './models.js';

const url = 'mongodb://localhost:27017/main';

mongoose
    .connect(url)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

await Movie.create({
    title: 'Matrix',
    year: 1999,
    rating: 2,
});

await Movies.create({
    title: 'dsad',
    category: 'dsad',
    year: 'dsad',
    duration: 'dsad',
});

await Category.create({
    title: 'sdasdas',
});

// const postDb = (name) => {
//     app.post(`/${name}`, async (req, res) => {
//         try {
//             await client.connect();
//
//             const database = client.db("main");
//             const collection = database.collection(name);
//
//             await collection.insertOne(req.body);
//
//             return res.status(201).send(`${name} created`);
//         } catch (error) {
//             console.error('Error:', error);
//             return res.status(500).send('Internal Server Error');
//         } finally {
//             await client.close();
//         }
//     });
// }
//
// postDb("movies")
// postDb("categories")

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
