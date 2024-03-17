import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Address } from "../entities/Address.entity";
import { Profile } from "../entities/Profile.entity";

const dataSource = new DataSource({
  type : 'mysql',
  host : 'localhost',
  port : 3306,
  username : 'root',
  password : 'root',
  database : 'test',
  synchronize : true,
  logging : true,
  entities : [
    Address, 
    User,
    Profile
  ]
})

export default dataSource