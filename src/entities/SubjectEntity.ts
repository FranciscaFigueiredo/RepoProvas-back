import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import ExamEntity from './ExamEntity';

import PeriodEntity from './PeriodEntity';

@Entity('subjects')
export default class SubjectEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToOne(() => PeriodEntity, { eager: true })
    @JoinColumn({ name: 'period_id' })
        period: PeriodEntity;

    @OneToMany(() => ExamEntity, (exam) => exam.subject)
        exam: ExamEntity;

    getSubject() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}
