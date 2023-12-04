import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import movieRouter from './routes/movie.js';
import { API, CORS_OPTIONS } from './utils/constants.js';

const app = express();

app.use(express.json());
app.use('/', movieRouter);
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
