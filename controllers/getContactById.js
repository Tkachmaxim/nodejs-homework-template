const {Contact} = require('../models/contact')
const RequestError = require('../herpers/RequestError')

const getContactById = async (req, res, next) => {
 const { contactId } = req.params;
        const contact = await Contact.findById(contactId)
        if (!contact) {
            throw RequestError(404, 'Not found')
        }
        res.json(contact)
}


module.exports = getContactById