import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exams')
export default class Exams {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        link: string;
}
