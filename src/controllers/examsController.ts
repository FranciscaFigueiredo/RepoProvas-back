/* eslint-disable prefer-destructuring */

import { Request, Response } from 'express';
import * as examService from '../services/examService';
import * as teacherService from '../services/teacherService';
import * as subjectService from '../services/subjectService';

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
        const exams = await examService.findExamsByTeacher(id);
        res.send(exams);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getExamsBySubject(req: Request, res: Response) {
    const id = Number(req.params.subject);

    try {
        const exams = await examService.findExamsBySubject(id);
        res.send(exams);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getTeachers(req: Request, res: Response) {
    try {
        const teachers = await teacherService.findTeachers();
        res.send(teachers);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getSubjects(req: Request, res: Response) {
    try {
        const teachers = await subjectService.findSubjects();
        res.send(teachers);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    postExam,
    getExams,
    getExamsByTeacher,
    getExamsBySubject,
    getTeachers,
    getSubjects,
};
