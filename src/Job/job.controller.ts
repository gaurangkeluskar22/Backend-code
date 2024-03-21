
import { Request, Response } from "express"
import dataSource from "../Datasource/dataSource"
import { Company } from "../entities/Company.entity"
const {addCompanyService, getCompaniesService, createJobService} = require('./job.services')

const addCompany = (req : Request , res : Response) => {
    const body = req.body
    addCompanyService(body, (err : Error, results : {})=>{
        if(err){
            return res.status(500).json({
                success : false,
                message : 'Database Error!'
            })
        }
        else{
            return res.status(200).json({
                success : true,
                message : "Company has been added in the database"
            })
        }
    })
}

const getCompanies = (req : Request , res : Response) => {
    const companyRepo = dataSource.getRepository(Company)
    getCompaniesService((err : Error, results : {})=> {
        if(err){
            res.status(500).json({
                success : false,
                message : "Database Error!"
            })
        }
        else{
            res.status(200).json({
                success : true,
                result : results
            })
        }
    })
    
}

const getJobs = (req : Request , res : Response) => {
    
}

const createJob = (req : Request, res : Response) => {
    const body = req.body
    createJobService(body, (err : Error, results : {})=> {
        if(err){
            res.status(500).json({
                success : false,
                message : "Database Error!"
            })
        }
        else{
            res.status(200).json({
                success : false,
                message : "Job has been created!W"
            })
        }
    })
}


module.exports = {addCompany, getJobs, getCompanies, createJob}