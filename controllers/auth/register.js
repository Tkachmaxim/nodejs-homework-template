const { User } = require('../../models/user')

const { RequestError } = require('../../herpers')

const bcrypt = require('bcrypt');


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        throw  RequestError(409, 'Email in use')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await User.create({ email, password:hashedPassword })
    res.status(201).json({user: {email:result.email, subcsription: result.subscription}})
}

module.exports = register