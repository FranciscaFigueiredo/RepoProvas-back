import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import ExamEntity from './ExamEntity';

@Entity('teachers')
export default class TeacherEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => ExamEntity, (exam) => exam.teacher)
        exam: ExamEntity;
}
