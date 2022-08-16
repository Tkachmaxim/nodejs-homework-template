const Joi = require('joi')
const contactSchema = Joi.object(
    {
        name: Joi.string().required(),
        phone: Joi.number().integer().required(),
        email: Joi.string().email().required()
    }
)


module.exports = {
    add : contactSchema
}
