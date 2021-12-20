import { getRepository } from 'typeorm';
import TeacherEntity from '../entities/TeacherEntity';

async function findTeacherBySubject(id: number): Promise<TeacherEntity[]> {
    const teachers = await getRepository(TeacherEntity).find({
        where: { id },
    });

    return teachers.map((teacher: { getTeacher: () => any; }) => teacher.getTeacher());
}

async function findTeachers(): Promise<TeacherEntity[]> {
    const teachers = await getRepository(TeacherEntity).find();

    return teachers.map((teacher: { getTeacher: () => any; }) => teacher.getTeacher());
}

export {
    findTeacherBySubject,
    findTeachers,
};
