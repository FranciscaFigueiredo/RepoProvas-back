import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', () => {
    console.log('test');
});

export {
    app,
};
