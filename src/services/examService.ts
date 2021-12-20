import { getRepository } from 'typeorm';
import CategoryEntity from '../entities/CategoryEntity';
import ExamEntity from '../entities/ExamEntity';
import SubjectEntity from '../entities/SubjectEntity';
import TeacherEntity from '../entities/TeacherEntity';
import ConflictError from '../errors/Conflict';
import { ExamBody } from '../protocols/Exam';

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

    // if (teacher.id <= 0) return false;

    const category = await getRepository(CategoryEntity)
        .findOne({ name: categoryName });

    // if (category.id <= 0) return false;

    const subject = await getRepository(SubjectEntity)
        .findOne({ name: subjectName });

    // if (subject.id <= 0) return false;

    const search = await getRepository(ExamEntity)
        .findOne({ name });
    console.log(search);
    if (!search) throw new ConflictError('Prova já cadastrada');

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

async function findExamsByTeacher(id: number): Promise<ExamEntity[]> {
    const exams = await getRepository(ExamEntity).find({
        where: { id },
    });

    return exams.map((exam: { getExam: () => any; }) => exam.getExam());
}

async function findExamsBySubject(id: number): Promise<ExamEntity[]> {
    const exams = await getRepository(ExamEntity).find({
        where: { id },
    });

    return exams.map((exam: { getExam: () => any; }) => exam.getExam());
}

export {
    create,
    findExams,
    findExamsByTeacher,
    findExamsBySubject,
};
