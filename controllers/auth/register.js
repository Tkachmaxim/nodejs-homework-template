const { User } = require('../../models/user')

const { RequestError, sendMail } = require('../../herpers')

const gravatar = require('gravatar')

const bcrypt = require('bcrypt');

const nanoid = require('nanoid')



const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        throw  RequestError(409, 'Email in use')
    }
    const avatarURL = gravatar.url(email)
    const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = nanoid();
    const result = await User.create({ email, password: hashedPassword, avatarURL, verificationToken})


   
    
    const mail = {
        to: email,
        subject: 'Подтверждение регистрации',
        html: `<a href = "http://localhost:3000/api/users/verify/${verificationToken}" target= "_blank"> Нажмите для подтверждения регистрации </a>`
    }

    await sendMail(mail)
    res.status(201).json({ user: { email: result.email, subcsription: result.subscription } })
}

module.exports = register