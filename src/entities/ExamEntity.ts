import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
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

    @OneToOne(() => TeacherEntity, { eager: true })
    @JoinColumn({ name: 'teacher_id' })
        teacherId: TeacherEntity;

    @OneToOne(() => CategoryEntity, { eager: true })
    @JoinColumn({ name: 'category_id' })
        categoryId: CategoryEntity;

    @OneToOne(() => SubjectEntity, { eager: true })
    @JoinColumn({ name: 'subject_id' })
        subjectId: SubjectEntity;
}
