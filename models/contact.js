const { Schema, model } = require('mongoose');
const Joi = require('Joi')
const {handleSchemaValidatorError} = require('../herpers')


const contactSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required : true
    }
})

contactSchema.post('save', handleSchemaValidatorError)

const addSchema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.number().integer().required(),
        email: Joi.string().email().required(),
  favorite: Joi.bool().default(false)
})

const updateFavorite = Joi.object({
    favorite : Joi.bool().required()
})

const schemas = {addSchema, updateFavorite}

const Contact = model("contacts", contactSchema)


module.exports = {Contact, schemas}