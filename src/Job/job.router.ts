const jobRouter = require('express').Router()
const { getJobs, addCompany, getCompanies} = require('./job.controller')

jobRouter.post('/addCompany', addCompany)
jobRouter.get('/getCompanies', getCompanies)
jobRouter.get('/getJobs', getJobs)

module.exports = jobRouter