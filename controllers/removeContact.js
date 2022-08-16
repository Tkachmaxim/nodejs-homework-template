const services = require('../services')
const RequestError = require('../herpers/RequestError')

const removeContact =  async (req, res, next) => {
const { contactId } = req.params;
        const deletedContact = await services.deleteContact(contactId)
        if (!deletedContact) {
            throw RequestError(404, 'Not found')
        }
        res.json({message:'Contact deleted'})    
}

module.exports = removeContact;