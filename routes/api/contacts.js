const express = require('express')

const controllers = require('../../controllers/controllers')

const router = express.Router()


router.get('/', controllers.listContact)

router.get('/:contactId', controllers.getContactById)

router.post('/', controllers.addContact)

router.delete('/:contactId', controllers.removeContact)

router.put('/:contactId', controllers.updateContact)

module.exports = router
