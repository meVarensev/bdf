import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
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

export const Movie = mongoose.model('Movie', MovieSchema);
