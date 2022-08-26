const {RequestError} = require('../herpers')
const { Contact } = require('../models/contact')

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    if (!updatedContact) {
        throw RequestError(404, 'Not found')
    }
    res.json(updatedContact)
}


module.exports = updateStatusContact;