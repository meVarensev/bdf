import mongoose from 'mongoose';
import express from 'express';
import { Category, Movie, Movies } from './models.js';

const url = 'mongodb://localhost:27017/main';

const app = express();
const port = 3002;
app.use(express.json());
app.get('/main/movie', async (req, res) => {
    try {
        const movie = await Movie.find();
        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/main/categories', async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/main/movie', async (req, res) => {
    try {
        const { title, year, rating, category } = req.body;

        const movie = await Movie.create({
            title,
            year,
            rating,
            category,
        });

        res.status(201).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

mongoose
    .connect(url)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

await Category.create({
    title: 'Боевик',
});

// await Movie.create({
//     title: 'Matrix',
//     year: 1999,
//     rating: 2,
// });
//
// await Movies.create({
//     title: 'dsad',
//     category: 'dsad',
//     year: 'dsad',
//     duration: 'dsad',
// });
