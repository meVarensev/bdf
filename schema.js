import mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema(
    {
        title: String,
        year: Number,
        rating: Number,
        category: {
            type: 'ObjectId',
            ref: 'Category',
        },
    },
    { collection: 'movie' }
);

export const MovieSSchema = new mongoose.Schema(
    {
        title: String,
        category: String,
        year: String,
        duration: String,
        director: String,
    },
    { collection: 'movies' }
);

export const CategoriesSchema = new mongoose.Schema(
    {
        title: String,
    },

    { collection: 'categories' }
);
