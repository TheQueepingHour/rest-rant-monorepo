const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const user = require('../models/user')

const { User } = db

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })
    if(!user || await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(400).json({
            message: `Could not find a user with that username or password.`
        })
    }else{
        res.json({user})
    }
})

module.exports = router