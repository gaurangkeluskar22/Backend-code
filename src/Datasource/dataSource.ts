import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Address } from "../entities/Address.entity";
import { Profile } from "../entities/Profile.entity";
import { Company } from "../entities/Company.entity";
import { Job } from "../entities/Job.entity";

const dataSource = new DataSource({
  type : 'mysql',
  host : 'localhost',
  port : 3306,
  username : 'root',
  password : 'G@123456789',
  database : 'test',
  synchronize : true,
  logging : true,
  entities : [
    Address, 
    User,
    Profile,
    Company,
    Job
  ]
})

export default dataSource