import express from 'express';
import * as examsController from '../controllers/examsController';

const router = express.Router();

router.post('/', examsController.postExam);
router.get('/', examsController.getExams);

export default router;
