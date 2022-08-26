const {Contact} = require('../models/contact')
const RequestError = require('../herpers/RequestError')

const getAll = async (req, res, next) => {
  const contacts = await Contact.find()
        if (!contacts) {
            throw RequestError(404, 'Not found')
        }
        res.json(contacts)
}

module.exports = getAll