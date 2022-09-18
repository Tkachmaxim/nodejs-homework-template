const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const updateSubscribe = require('./updateSubscribe')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resenederEmailVerify = require('./resenederEmailVerify')

module.exports = { register, login, logout, current, updateSubscribe, updateAvatar, verifyEmail, resenederEmailVerify }