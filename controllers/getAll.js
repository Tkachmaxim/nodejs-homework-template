const {Contact} = require('../models/contact')
const RequestError = require('../herpers/RequestError')

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite=false } = req.query;
  const skip = (page - 1) * limit;


  const contacts = await Contact.find({owner, favorite},"-_id", { skip, limit:Number(limit) }).populate('owner', 'email')
        if (!contacts) {
            throw RequestError(404, 'Not found')
        }
        res.json(contacts)
}

module.exports = getAll