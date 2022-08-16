const express = require('express')

const router = express.Router()

const ctrl = require('../../controllers')

const { ctrlWraper } = require('../../herpers')
const { validationBody } = require('../../middlewares')

const schemas = require('../../schemas/contactAddSchemas')


router.get('/', ctrlWraper(ctrl.getAll))

router.get('/:contactId', ctrlWraper(ctrl.getContactById))

router.post('/', validationBody(schemas.add), ctrlWraper(ctrl.addContact))

router.delete('/:contactId', ctrlWraper(ctrl.removeContact))

router.put('/:contactId', validationBody(schemas.add), ctrlWraper(ctrl.updateContact))

module.exports = router
