import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema(
    {
        title: String,
    },

    { collection: 'categories' }
);

export const Category = mongoose.model('Category', CategoriesSchema);
