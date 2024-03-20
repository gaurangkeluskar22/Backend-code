import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address.entity";
import { Profile } from "./Profile.entity";
import { Company } from "./Company.entity";

enum UserEnum {
    value1 = 1, // jobseeker
    value2 = 2, // employer
    value3 = 3, // Admin
}

enum GenderEnum {
    male = 'male',
    female = 'female'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    firstname : string

    @Column()
    lastname : string

    @Column()
    email : string

    @Column()
    password : string

    @Column()
    phone : number

    @Column()
    age : number

    @Column({
        type : 'enum',
        enum : GenderEnum,
    })
    gender : GenderEnum

    @Column({
        type : 'enum',
        enum : UserEnum,
        default : UserEnum.value1
    })
    role : UserEnum

   @OneToOne(()=> Address, (address)=> address.user, {eager : true})
   address : Address

   @OneToOne(()=> Profile, (profile)=> profile.user, {eager: true})
   profile : Profile

   @OneToOne(()=> Company, (company)=> company.user, {eager : true})
   company : Company
}