const services = require('../services')
const RequestError = require('../herpers/RequestError')

const addContact = async (req, res, next) => {
        const newContact = await services.addContact(req.body)
        if (!newContact) {
            throw RequestError(404, 'Server error')
        }
        res.status(201).json(newContact)
}

module.exports = addContact