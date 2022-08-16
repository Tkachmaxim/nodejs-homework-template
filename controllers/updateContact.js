const services = require('../services')
const RequestError = require('../herpers/RequestError')



const updateContact = async (req, res, next) => {

        const { contactId } = req.params
        const updatedContact = await services.updateContact(contactId, req.body)
        if (!updatedContact) {
            throw RequestError(404, 'Not found')
        }
        res.json(updatedContact)
}

module.exports = updateContact