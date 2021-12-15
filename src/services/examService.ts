import { ExamBody } from '../protocols/Exam';

async function create(examBody: ExamBody): Promise<any> {
    // const {
    //     name,
    //     link,
    //     categoryName,
    //     teacherName,
    //     subject,
    // } = examBody;

    console.log(examBody);
}

export {
    create,
};
