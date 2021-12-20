import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

import CategoryEntity from './CategoryEntity';
import SubjectEntity from './SubjectEntity';
import TeacherEntity from './TeacherEntity';

@Entity('exams')
export default class ExamEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        link: string;

    @ManyToOne(() => TeacherEntity, (teacher) => teacher.id, { eager: true })
    @JoinColumn({ name: 'teacher_id' })
        teacher: TeacherEntity;

    @ManyToOne(() => CategoryEntity, (category) => category.id, { eager: true })
    @JoinColumn({ name: 'category_id' })
        category: CategoryEntity;

    @ManyToOne(() => SubjectEntity, (subject) => subject.id, { eager: true })
    @JoinColumn({ name: 'subject_id' })
        subject: SubjectEntity;

    getExam() {
        return {
            examId: this.id,
            name: this.name,
            link: this.link,
            teacherId: this.teacher.id,
            teacherName: this.teacher.name,
            categoryId: this.category.id,
            categoryName: this.category.name,
            subjectId: this.subject.id,
            subjectName: this.subject.name,
        };
    }
}
