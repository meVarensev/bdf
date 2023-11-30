import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { Category, Movie } from './models.js';
import { API, CORS_OPTIONS } from './constants.js';

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/', router);
app.use(cors(CORS_OPTIONS));
mongoose
    .connect(API.URL)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(API.PORT, () => {
            console.log(`Server is running at http://localhost:${API.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

router.get('/movie', async (req, res) => {
    try {
        const movie = await Movie.find();
        return res.status(201).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/movie', async (req, res) => {
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

app.delete('/movie/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        const deletedMovie = await Movie.findOneAndDelete({ _id });

        res.json({
            text: 'Requests are working. [DELETE]',
            deletedMovie,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/movie/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, otherReq } = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(
            _id,
            { title, ...otherReq },
            { new: true }
        );

        res.json({
            text: 'Requests are working. [PUT]',
            updatedMovie,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// TODO: in progress Добавить эндпоинт с логикой для добавления комментариев для фильма

// await Category.create({
//     title: 'Боевик',
// });

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
