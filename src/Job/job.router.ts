const jobRouter = require('express').Router()
const { getJobs, addCompany, getCompanies, createJob, updateJob} = require('./job.controller')

jobRouter.post('/addCompany', addCompany)
jobRouter.get('/getCompanies', getCompanies)
jobRouter.get('/getJobs', getJobs)
jobRouter.post('/createJob', createJob)
jobRouter.put('/updateJob', updateJob)

module.exports = jobRouter