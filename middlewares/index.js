const validationBody = require('./validationBody')
const isValidId = require('./isValid')
const authenticate = require('./authtenticate')
const uploads = require('./uploads')

module.exports = {
    validationBody,
    isValidId, 
    authenticate,
    uploads
}