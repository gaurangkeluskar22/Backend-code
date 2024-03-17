const router = require('express').Router()
const { createUser, addAddress, addProfile, getJobSeekers } = require('./user.controller')
 
router.post('/create', createUser)
router.get('/getJobSeekers', getJobSeekers)
router.post('/addAddress', addAddress)
router.post('/addProfile', addProfile)



module.exports = router