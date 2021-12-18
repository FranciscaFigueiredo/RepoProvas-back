/* eslint-disable prefer-destructuring */

import { Request, Response } from 'express';
import * as examService from '../services/examService';

async function postExam(req: Request, res: Response) {
    const name: string = req.body.name;
    const link: string = req.body.link;
    const categoryName: string = req.body.category;
    const teacherName: string = req.body.teacher;
    const subjectName: string = req.body.subject;

    try {
        const body = await examService.create({
            name,
            link,
            categoryName,
            teacherName,
            subjectName,
        });
        res.send(body);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getExams(req: Request, res: Response) {
    try {
        const exams = await examService.findExams();
        res.send(exams);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getExamsByTeacher(req: Request, res: Response) {
    const id = Number(req.params.teacher);

    try {
        const exams = await examService.findExamsTeacher(id);
        res.send(exams);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getExamsBySubject(req: Request, res: Response) {
    const id = Number(req.params.teacher);

    try {
        const exams = await examService.findExamsBySubject(id);
        res.send(exams);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    postExam,
    getExams,
    getExamsByTeacher,
    getExamsBySubject,
};
