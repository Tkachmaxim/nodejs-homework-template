const { User } = require('../../models/user')

const { RequestError } = require('../../herpers')

const gravatar = require('gravatar')

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')

const {SECRET_KEY} = process.env;


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        throw  RequestError(409, 'Email in use')
    }
    const avatarURL = gravatar.url(email)
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await User.create({ email, password: hashedPassword, avatarURL })
    const payload = {
        id: result._id
    }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
    const userUpd = await User.findByIdAndUpdate(result._id, { token });
    res.status(201).json({user: {email:result.email, subcsription: result.subscription}, token})
}

module.exports = register