import express from 'express';

import { createMovie } from '../services/movie-service.js';
import { Category } from '../models/category.js';
import { Movie } from '../models/movie.js';

const router = express.Router();

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

router.post('/movie', (req, res) => {
    try {
        const { title, year, rating, category } = req.body;

        const movie = createMovie({
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

router.delete('/movie/:_id', async (req, res) => {
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

router.put('/movie/:_id', async (req, res) => {
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

export default router;
