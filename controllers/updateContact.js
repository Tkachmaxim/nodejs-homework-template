const RequestError = require('../herpers/RequestError')
const {Contact} = require('../models/contact')



const updateContact = async (req, res, next) => {

        const { contactId } = req.params
        const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {new:true})
        if (!updatedContact) {
            throw RequestError(404, 'Not found')
        }
        res.json(updatedContact)
}

module.exports = updateContact