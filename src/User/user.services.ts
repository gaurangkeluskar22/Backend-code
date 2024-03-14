import dataSource from "../Datasource/dataSource"
import { Address } from "../entities/Address.entity"
import { User } from "../entities/User.entity"

const createUserService = async (data : any, callBack : any) => {
    const userRepo = dataSource.getRepository(User)
    const user = new User()
    user.firstname = data.firstname
    user.lastname = data.lastname
    user.email = data.email
    user.password = data.password
    user.phone = data.phone
    user.age = data.age
    user.gender = data.gender
    user.role = data.role

    await userRepo.save(user).then((res)=>{
        return callBack(null, res)
    }).catch((err)=>{
        return callBack(err)
    })
}

const addAddressService = async (data : any, callBack : any) => {
    const addressRepo = dataSource.getRepository(Address)
    const address = new Address()
    address.address = data.address
    address.zipcode = data.zipcode
    address.city = data.city
    address.state = data.state
    address.user = data.userId

    await addressRepo.save(address).then((res)=>{
        return callBack(null, res)
    }).catch((err)=>{
        return callBack(err)
    })
}

module.exports = {createUserService, addAddressService}