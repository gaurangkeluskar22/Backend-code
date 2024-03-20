import dataSource from "../Datasource/dataSource"
import { Company } from "../entities/Company.entity"

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


module.exports = {addCompanyService, getCompaniesService}