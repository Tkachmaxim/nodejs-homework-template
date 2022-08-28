const { isValidObjectId } = require('mongoose')
const { RequestError } = require('../herpers')

const isValidId = (req, _, next) => {
    const { contactId } = req.params;
    const isCorrectId = isValidObjectId(contactId)
    if (!isCorrectId) {
        throw RequestError(400, `${contactId} is not correct id format`)
    }
    next()
}

module.exports = isValidId;