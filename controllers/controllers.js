const services = require('../services/services')
const { RequestError } = require('../herpers')
const Joi = require('joi')
const contactSchema = Joi.object(
  {name: Joi.string().required(), phone: Joi.number().integer().required(), email:Joi.string().email().required()}
)

const listContact = async (req, res, next) => {
    try {
        const contacts = await services.getAll()
        if (!contacts) {
            throw RequestError(404, 'Not found')
        }
        res.json(contacts)
    } catch (error) {
        next(error)
    }
}

const getContactById = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const contact = await services.getById(contactId)
        if (!contact) {
            throw RequestError(404, 'Not found')
        }
        res.json(contact)
        
    } catch (error) {
        next(error)
    }
}

const addContact = async (req, res, next) => {
    try {
        const { error } = contactSchema.validate(req.body)
        if (error) {
            throw RequestError(400, error.message)
        }
        const newContact = await services.addContact(req.body)
        if (!newContact) {
            throw RequestError(404, 'Server error')
        }
        res.status(201).json(newContact)
    } catch (error) {
        next(error)
    }
}

const removeContact = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const deletedContact = await services.deleteContact(contactId)
        if (!deletedContact) {
            throw RequestError(404, 'Not found')
        }
        res.json({message:'Contact deleted'})    
    } catch (error) {
        next(error)
    }
}

const updateContact = async (req, res, next) => {
    try {
        const { error } = contactSchema.validate(req.body)
        if (error) {
            throw RequestError(400, error.message)
        }
        const { contactId } = req.params
        const updatedContact = await services.updateContact(contactId, req.body)
        if (!updatedContact) {
            throw RequestError(404, 'Not found')
        }
        res.json(updatedContact)
    } catch (error) {
        next(error)
    }
}

module.exports = {listContact, getContactById, addContact, removeContact, updateContact}