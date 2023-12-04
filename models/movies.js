import mongoose from 'mongoose';

const MovieSSchema = new mongoose.Schema(
    {
        title: String,
        category: String,
        year: String,
        duration: String,
        director: String,
    },
    { collection: 'movies' }
);

export const Movies = mongoose.model('Movies', MovieSSchema);
