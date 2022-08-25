const services = require('../services')
const RequestError = require('../herpers/RequestError')

const getContactById = async (req, res, next) => {
 const { contactId } = req.params;
        const contact = await services.getById(contactId)
        if (!contact) {
            throw RequestError(404, 'Not found')
        }
        res.json(contact)
}


module.exports = getContactById