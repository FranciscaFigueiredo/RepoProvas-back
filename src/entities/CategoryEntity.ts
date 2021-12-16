import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity('categories')
export default class CategoryEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
