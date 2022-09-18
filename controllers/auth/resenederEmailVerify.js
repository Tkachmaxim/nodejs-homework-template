const {User} = require('../../models/user')
const {RequestError, sendMail} = require('../../herpers')

const resenederEmailVerify = async (req, res) => {
    const { email } = req.body;
    const user = User.findOne({ email })
    if (!user) {
        throw RequestError(404, 'Not found')
    }
    if (user.verify) {
        throw RequestError(400, 'User already verified')
    }

     const mail = {
        to: email,
        subject: 'Подтверждение регистрации',
        html: `<a href = "http://localhost:3000/api/users/verify/${user.verificationToken}" target= "_blank"> Нажмите для подтверждения регистрации </a>`
    }
    sendMail(mail)
    res.json({
        message:"Verification email sent"
    })
}

module.exports = resenederEmailVerify