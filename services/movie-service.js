import { Movie } from '../models/movie.js';

export const createMovie = ({ title, year, rating, category }) => {
    Movie.create({
        title,
        year,
        rating,
        category,
    });
};
