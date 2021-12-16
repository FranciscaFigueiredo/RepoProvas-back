import { getRepository } from 'typeorm';
import CategoryEntity from '../entities/CategoryEntity';
import ExamEntity from '../entities/ExamEntity';
import TeacherEntity from '../entities/TeacherEntity';
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
        .createQueryBuilder('exam')
        .leftJoinAndSelect('exam.teacher', 'teacher.id')
        .where('name = :name', { name: teacherName })
        .execute();

    const category = await getRepository(CategoryEntity)
        .createQueryBuilder('exam')
        .leftJoinAndSelect('exam.category', 'category.id')
        .where('name = :name', { name: categoryName })
        .execute();

    const subject = await getRepository(CategoryEntity)
        .createQueryBuilder('exam')
        .leftJoinAndSelect('exam.subject', 'subject.id')
        .where('name = :name', { name: subjectName })
        .execute();

    const exam = await getRepository(ExamEntity)
        .insert({
            name,
            link,
            teacherId: teacher.id,
            categoryId: category.id,
            subjectId: subject.id,
        });

    return exam;
}

export {
    create,
};
