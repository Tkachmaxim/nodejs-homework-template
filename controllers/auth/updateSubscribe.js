const {User} = require('../../models/user')

const updateSubscribe = async (req, res) => {
    const { _id } = req.user
    const result = await User.findByIdAndUpdate(_id, req.body, { new: true })
    console.log(result)
    res.status(201).json(result)
}

module.exports = updateSubscribe