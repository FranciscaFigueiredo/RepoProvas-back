import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('teachers')
export default class TeacherEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
