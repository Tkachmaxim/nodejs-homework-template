const { User } = require('../../models/user')

const logout = async (req, res) => {
    console.log('here')
    console.log(req.user)
    const { _id } = req.user;
    console.log(_id)
    await User.findByIdAndUpdate(_id, { token: '' })
    res.json({
        message: 'Logout succes'
    })
}

module.exports = logout;