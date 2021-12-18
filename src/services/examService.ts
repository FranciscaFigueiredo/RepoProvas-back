import { getRepository } from 'typeorm';
import CategoryEntity from '../entities/CategoryEntity';
import ExamEntity from '../entities/ExamEntity';
import SubjectEntity from '../entities/SubjectEntity';
import TeacherEntity from '../entities/TeacherEntity';
import { ExamBody, ExamDB } from '../protocols/Exam';

async function create(examBody: ExamBody): Promise<any> {
    const {
        name,
        link,
        categoryName,
        teacherName,
        subjectName,
    } = examBody;

    const teacher = await getRepository(TeacherEntity)
        .findOne({ name: teacherName });

    if (teacher.id !== 0) return false;

    const category = await getRepository(CategoryEntity)
        .findOne({ name: categoryName });

    if (category.id !== 0) return false;

    const subject = await getRepository(SubjectEntity)
        .findOne({ name: subjectName });

    if (subject.id !== 0) return false;

    const exam = await getRepository(ExamEntity)
        .insert({
            name,
            link,
            teacher,
            category,
            subject,
        });

    return exam;
}

async function findExams(): Promise<any> {
    const exams = await getRepository(ExamEntity).find();

    return exams.map((exam) => exam.getExam());
}

async function findExamsTeacher(id: number): Promise<ExamEntity[]> {
    // const exams = await getRepository(ExamEntity)
    //     .find({ select: [id] });

    const exam = getRepository(ExamEntity).find({
        join: {
            alias: 'teacherId',
            leftJoinAndSelect: {
                teachers: 'exams.teacherId',
            },
        },
    });
    //     .createQueryBuilder('exams')
    //     .where('exams.teacher.id = :id', { id })
    //     .leftJoinAndSelect('exams.teacher.id', 'teacher.id')
    //     .execute();

    return exam;
}

async function findExamsBySubject(id: number): Promise<any> {
    const exams = await getRepository(ExamEntity)
        .createQueryBuilder('exams')
        .where('exams.subject.id = :id', { id })
        .leftJoinAndSelect('exams.subject.id', 'subject.id')
        .execute();

    return exams.map((exam: { getExam: () => any; }) => exam.getExam());
}

export {
    create,
    findExams,
    findExamsTeacher,
    findExamsBySubject,
};
