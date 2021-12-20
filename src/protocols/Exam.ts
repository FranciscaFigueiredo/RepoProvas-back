export interface ExamBody {
    name: string;
    link: string;
    categoryName: string;
    teacherName: string;
    subjectName: string;
}

export interface ExamDB {
    id: number;
    name: string;
    link: string;
    teacherId: number;
    categoryId: number;
    subjectId: number;
}
