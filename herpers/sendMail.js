const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
    try {
        const mail = { ...data, from: "tkachmaxim23@gmail.com" }
        await sgMail.send(mail);
        console.log('email sended')
        return true
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

module.exports = sendMail;