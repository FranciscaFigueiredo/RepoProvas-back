/* eslint-disable prefer-destructuring */

import { Request, Response } from 'express';
import * as examService from '../services/examService';

async function postExam(req: Request, res: Response) {
    const name: string = req.body.name;
    const link: string = req.body.link;
    const categoryName: string = req.body.categoryName;
    const teacherName: string = req.body.teacherName;
    const subjectName: string = req.body.subject;

    try {
        const body = examService.create({
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

export {
    postExam,
};
