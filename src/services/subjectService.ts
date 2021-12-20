import { getRepository } from 'typeorm';
import SubjectEntity from '../entities/SubjectEntity';

async function findSubjects(): Promise<SubjectEntity[]> {
    const subjects = await getRepository(SubjectEntity).find();

    return subjects.map((subject: { getSubject: () => any; }) => subject.getSubject());
}

export {
    findSubjects,
};
