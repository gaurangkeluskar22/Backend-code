import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    address : string

    @Column()
    zipcode : number

    @Column()
    state : string

    @Column()
    city : string

    @OneToOne(()=> User, (user)=> user.address)
    @JoinColumn()
    user : User
}