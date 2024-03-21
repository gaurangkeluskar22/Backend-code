import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.entity";


@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    title : String

    @Column()
    description : String

    @Column()
    total_jobs : number

    @Column()
    salary : number

    @ManyToOne(()=> Company , (company) => company.job)
    @JoinColumn()
    company : Company
}