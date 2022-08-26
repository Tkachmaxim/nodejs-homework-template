const express = require('express')
 
const router = express.Router()

const ctrl = require('../../controllers')

const { ctrlWraper } = require('../../herpers')
const { validationBody } = require('../../middlewares')
const {isValidId} = require('../../middlewares')

const {schemas} = require('../../models/contact')


router.get('/', ctrlWraper(ctrl.getAll))

router.get('/:contactId', isValidId, ctrlWraper(ctrl.getContactById))

router.post('/', validationBody(schemas.addSchema), ctrlWraper(ctrl.addContact))

router.delete('/:contactId', isValidId, ctrlWraper(ctrl.removeContact))

router.put('/:contactId', isValidId, validationBody(schemas.addSchema), ctrlWraper(ctrl.updateContact))

router.patch('/:contactId/favorite', isValidId, validationBody(schemas.updateFavorite), ctrlWraper(ctrl.updateStatusContact))

module.exports = router
