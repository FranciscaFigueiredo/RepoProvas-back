import express from 'express';
import * as examsController from '../controllers/examsController';

const router = express.Router();

router.post('/', examsController.postExam);
router.get('/', examsController.getExams);
router.get('/teacher/:teacher', examsController.getExamsByTeacher);
router.get('/teachers', examsController.getTeachers);
router.get('/subject/:subject', examsController.getExamsBySubject);
router.get('/subjects', examsController.getSubjects);

export default router;
