const contacts = require('../models/contacts')

const getAll = async () => {
    try {
        const data = await contacts.listContacts()
        return data
    } catch (error) {
        console.log(error.message)
    }
}

const getById = async(idContacts) =>{
try {
        const contact = await contacts.getContactById(idContacts)
    return contact
} catch (error) {
    console.log(error.message)
}
}

const addContact = async (contact) => {
    try {
        const newContact = await contacts.addContact(contact)
        return newContact
    } catch (error) {
        console.log(error.message)
    }
}

const deleteContact = async (contactId) => {
    try {
        return await contacts.removeContact(contactId)
    } catch (error) {
        console.log(error.message)
    }
}

const updateContact = async (id, contact) => {
    try {
        return await contacts.updateContact(id, contact)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAll, getById, addContact, deleteContact, updateContact
}