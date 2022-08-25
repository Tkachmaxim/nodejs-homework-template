const services = require('../services')
const RequestError = require('../herpers/RequestError')

const getAll = async (req, res, next) => {
  const contacts = await services.getAll()
        if (!contacts) {
            throw RequestError(404, 'Not found')
        }
        res.json(contacts)
}

module.exports = getAll