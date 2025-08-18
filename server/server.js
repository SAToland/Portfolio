import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from '../server/config/mongoose.config.js';

const app = express();
app.use(express.json(), cors());

app.use('/api', )

dotenv.config();
const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);