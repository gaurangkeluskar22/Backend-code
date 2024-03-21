import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { Job } from "./Job.entity";


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

    @OneToMany(()=> Job, (job)=> job.company)
    job : Job
}