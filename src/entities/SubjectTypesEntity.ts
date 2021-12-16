import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('subject_types')
export default class SubjectTypesEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
