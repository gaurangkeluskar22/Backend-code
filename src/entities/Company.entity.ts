import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";


@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : String

    @Column()
    Details : String

    @OneToOne(()=> User, (user)=> user.company)
    @JoinColumn()
    user : User

}