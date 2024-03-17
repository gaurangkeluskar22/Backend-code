import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

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

    @OneToOne(()=> User, (user)=> user.profile)
    @JoinColumn()
    user : User
}