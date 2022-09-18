const { Schema, model } = require('mongoose');
const Joi = require('Joi')
const { handleSchemaValidatorError } = require('../herpers')
const emailRegexp = /^[\w.]+@[\w.]+.[\w.]+$/

const userSchema = Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
        match : emailRegexp
    },
    avatarURL: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required: true,
        minlength : 6
    },
     subscription: {
         type: String,
         enum: ["starter", "pro", "business"],
         default: "starter"
  },
    token: {
        type: String,
        default:''
    },

    verify: {
    type: Boolean,
    default: false,
    },
    
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
}, { versionKey: false, timestamp: true })

userSchema.post('save', handleSchemaValidatorError)



const registerSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password : Joi.string().min(6).required(), 
    repeat_password : Joi.ref('password')
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password : Joi.string().min(6).required(), 
})

const verifyEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required()
})


const schemas = { registerSchema, loginSchema, verifyEmailSchema }

const User = model('user', userSchema)

module.exports = {schemas, User}