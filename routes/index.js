const express = require('express')
const router = express()

const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')

const { authenticator } = require('../middleware/auth')

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)


module.exports = router