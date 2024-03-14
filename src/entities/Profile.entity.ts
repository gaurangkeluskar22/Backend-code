import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    University_name : string

    @Column()
    grade : string

    @Column()
    experience : number

    @Column()
    expected_salary : number 
}