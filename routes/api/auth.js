const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/auth')

const { ctrlWraper } = require('../../herpers')

const { validationBody } = require('../../middlewares')

const {authenticate}= require('../../middlewares')

const {schemas} = require('../../models/user')

router.post('/signup', validationBody(schemas.registerSchema), ctrlWraper(ctrl.register))
router.post('/login', validationBody(schemas.loginSchema), ctrlWraper(ctrl.login))
router.get('/logout', authenticate, ctrlWraper(ctrl.logout))
router.get('/current', authenticate, ctrlWraper(ctrl.current))
router.patch('', authenticate, ctrlWraper(ctrl.updateSubscribe))

module.exports = router;