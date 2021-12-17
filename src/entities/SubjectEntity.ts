import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import ExamEntity from './ExamEntity';

import SubjectTypesEntity from './SubjectTypesEntity';

@Entity('subjects')
export default class SubjectEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        period: string;

    @OneToOne(() => SubjectTypesEntity, { eager: true })
    @JoinColumn({ name: 'type_id' })
        type: SubjectTypesEntity;

    @OneToMany(() => ExamEntity, (exam) => exam.subject)
        exam: ExamEntity;
}
