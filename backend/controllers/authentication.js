const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const user = require('../models/user')

const { User } = db

router.post('/', async (req, res) => {
    console.log('hi')
})

module.exports = router