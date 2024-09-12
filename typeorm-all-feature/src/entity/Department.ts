import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;
}
