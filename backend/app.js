import express from 'express';
import courseRouter from './routes/course.js';
import { config } from 'dotenv';

export const app = express();

config({
  path: './data/config.env',
});

// using Middleware
app.use(express.json());

app.use('/api/v1/course', courseRouter);

app.get('/', (req, res) => {
  res.send('Nice Working');
});
