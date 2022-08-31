const RequestError = require('../herpers/RequestError')
const {Contact} = require('../models/contact')


const addContact = async (req, res, next) => {
    const {_id : owner} = req.user
    const newContact = await Contact.create({...req.body, owner})
        if (!newContact) {
            throw RequestError(404, 'Server error')
        }
        res.status(201).json(newContact)
}

module.exports = addContact