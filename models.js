import mongoose from 'mongoose';
import { CategoriesSchema, MovieSchema, MovieSSchema } from './schema.js';

export const Movie = mongoose.model('Movie', MovieSchema);
export const Movies = mongoose.model('Movies', MovieSSchema);
export const Category = mongoose.model('Category', CategoriesSchema);
