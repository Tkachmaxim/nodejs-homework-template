const RequestError = require('../herpers/RequestError')
const {Contact} = require('../models/contact')

const removeContact =  async (req, res, next) => {
const { contactId } = req.params;
        const deletedContact = await Contact.findByIdAndRemove(contactId)
        if (!deletedContact) {
            throw RequestError(404, 'Not found')
        }
        res.json({message:'Contact deleted'})    
}

module.exports = removeContact;