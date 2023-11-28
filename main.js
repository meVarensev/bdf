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
