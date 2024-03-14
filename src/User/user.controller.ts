import { Request,Response } from "express"
const {createUserService, addAddressService } = require('./user.services')

const createUser = (req : Request, res : Response) => {
    const body = req.body;
    createUserService(body, (err : Error, result : {})=>{
        if(err){
            res.status(500).json({
                success : false,
                message : "Database error",
            })
        }
        else{
            res.status(200).json({
                success : true,
                message : "User has been created Successfully!"
            })
        }
    })

}

const addAddress = (req : Request, res : Response) => {
    const body = req.body
    addAddressService(body, (err : Error, result : {})=>{
        if(err){
            res.status(500).json({
                success : false,
                message : "Database error",
            })
        }
        else{
            res.status(200).json({
                success : true,
                message : "Address has been created Successfully!"
            })
        }
    })
}

module.exports = {createUser, addAddress}