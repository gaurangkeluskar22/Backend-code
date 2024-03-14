const router = require('express').Router()
const { createUser, addAddress } = require('./user.controller')
 
router.post('/create', createUser)
router.post('/addAddress', addAddress)




module.exports = router