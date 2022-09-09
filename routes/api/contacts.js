const express = require('express')
 
const router = express.Router()

const ctrl = require('../../controllers')

const { ctrlWraper } = require('../../herpers')
const { validationBody } = require('../../middlewares')
const { isValidId } = require('../../middlewares')
const {authenticate} = require('../../middlewares')

const {schemas} = require('../../models/contact')


router.get('/', authenticate, ctrlWraper(ctrl.getAll))

router.get('/:contactId', authenticate, isValidId, ctrlWraper(ctrl.getContactById))

router.post('/', authenticate, validationBody(schemas.addSchema), ctrlWraper(ctrl.addContact))

router.delete('/:contactId', authenticate, isValidId, ctrlWraper(ctrl.removeContact))

router.put('/:contactId', authenticate, isValidId, validationBody(schemas.addSchema), ctrlWraper(ctrl.updateContact))

router.patch('/:contactId/favorite', authenticate, isValidId, validationBody(schemas.updateFavorite), ctrlWraper(ctrl.updateStatusContact))

module.exports = router
