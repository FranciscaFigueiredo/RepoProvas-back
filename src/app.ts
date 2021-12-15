import express from 'express';
import cors from 'cors';

import 'reflect-metadata';
import connectDatabase from './database';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', () => {
    console.log('test');
});

export async function init() {
    await connectDatabase();
}

export {
    app,
};
