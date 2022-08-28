const RequestError = require('../herpers/RequestError')
const {Contact} = require('../models/contact')


const addContact = async (req, res, next) => {
    const newContact = await Contact.create(req.body)
    console.log('NewContact', newContact)
        if (!newContact) {
            throw RequestError(404, 'Server error')
        }
        res.status(201).json(newContact)
}

module.exports = addContact