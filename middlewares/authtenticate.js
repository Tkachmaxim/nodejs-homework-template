const { RequestError } = require('../herpers')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = process.env;
const {User} = require('../models/user')

const authenticate = async (req, res, next) => {
    const { authorization = '' } = req.headers;

    const [bearer, token] = authorization.split(" ")

    if (bearer !== 'Bearer') {
        next(RequestError(401, 'Unauthorized'))
    }
    
    try {
        try {
            const { id } = jwt.verify(token, SECRET_KEY)
        } catch (error) {
            RequestError(401, 'Unauthorized')
        }

        const user = await User.findOne({token})

        if (!user) {
            next(RequestError(401, 'Not authorized'))
        }
        req.user = user;
        next()
    } catch (error) {
        RequestError(401, error.message)
    }
    
}

module.exports = authenticate