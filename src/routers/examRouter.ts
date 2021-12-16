import express from 'express';
import * as examsController from '../controllers/examsController';

const router = express.Router();

router.post('/', examsController.postExam);

export default router;
