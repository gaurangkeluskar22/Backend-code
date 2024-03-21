import dataSource from "../Datasource/dataSource"
import { Company } from "../entities/Company.entity"
import { Job } from "../entities/Job.entity"

const addCompanyService = async (data : any, callBack : any) => {
    const companyRepo = dataSource.getRepository(Company)
    const company = new Company()
    company.name = data.name
    company.Details = data.Details
    company.user = data.userId 

    await companyRepo.save(company).then((res)=> {
        return callBack(null, res)
    }).catch((err)=> {
        return callBack(err)
    })

}

const getCompaniesService = async (callBack : any) => {
    const companyRepo = dataSource.getRepository(Company)
    await companyRepo.find({}).then((res)=> {
        return callBack(null, res)
    }).catch((err)=> {
        return callBack(err)
    })
}

const createJobService = async (data : any, callBack : any) => {
    const jobRepo = dataSource.getRepository(Job)
    const job = new Job()
    job.title = data.title
    job.description = data.description
    job.total_jobs = data.total_jobs
    job.salary = data.salary
    job.company = data.companyId
    jobRepo.save(job).then((res)=>{
        return callBack(null, res)
    }).catch((err)=>{
        return callBack(err)
    })
}


module.exports = {addCompanyService, getCompaniesService, createJobService}