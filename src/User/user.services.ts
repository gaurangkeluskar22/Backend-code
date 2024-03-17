import dataSource from "../Datasource/dataSource"
import { Address } from "../entities/Address.entity"
import { Profile } from "../entities/Profile.entity"
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

const addProfileService = async (data: any, callBack: any) => {
    const profileRepo = dataSource.getRepository(Profile)
    const profile = new Profile()
    profile.University_name = data.University_name
    profile.expected_salary = data.expected_salary
    profile.experience = data.experience
    profile.grade = data.grade
    profile.user = data.userId

    await profileRepo.save(profile).then((res)=>{
        return callBack(null, res)
    }).catch((err)=>{
        return callBack(err)
    })
}

const getJobSeekersService = async (callBack : any) => {
    const userRepo = dataSource.getRepository(User)
    await userRepo.find({
        where: {
            role : 1
        }
    }).then((res)=>{
        return callBack(null, res)
    }).catch((err)=>{
        return callBack(err)
    })
}

module.exports = {createUserService, addAddressService, addProfileService, getJobSeekersService}