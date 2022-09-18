const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/auth')

const { ctrlWraper } = require('../../herpers')

const { validationBody } = require('../../middlewares')

const {authenticate, uploads}= require('../../middlewares')

const {schemas} = require('../../models/user')

router.post('/signup', validationBody(schemas.registerSchema), ctrlWraper(ctrl.register))
router.get('/verify/:verificationToken', ctrlWraper(ctrl.verifyEmail))
router.post('/verify', validationBody(schemas.verifyEmailSchema), ctrl.resenederEmailVerify)
router.post('/login', validationBody(schemas.loginSchema), ctrlWraper(ctrl.login))
router.get('/logout', authenticate, ctrlWraper(ctrl.logout))
router.get('/current', authenticate, ctrlWraper(ctrl.current))
router.patch('', authenticate, ctrlWraper(ctrl.updateSubscribe))
router.patch('/avatars', authenticate, uploads.single('avatar'), ctrlWraper(ctrl.updateAvatar))

module.exports = router;