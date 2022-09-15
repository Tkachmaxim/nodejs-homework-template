const { expression } = require('joi');
const mongoose = require('mongoose');
const { token } = require('morgan');
const request = require('supertest');
require('dotenv').config();

const app = require('../app');
const { any } = require('../middlewares/uploads');
const { User } = require('../models/user')
const { DB_HOST, PORT = 3000 } = process.env; 

describe('test registration', () => {
    let server;
  
    beforeAll(() => server = app.listen(PORT) )
    afterAll(() => server.close())
    beforeEach((done) => {
        mongoose.connect(DB_HOST).then(() => done())

    })

    afterEach(() => {
        
        mongoose.connection.db.dropCollection(() => {
            mongoose.connection.close(()=>done())
        })
    })

    test("test signUp response", async () => {
        const newUser = {
            email: 'test48@gmail.com',
            password: '0286390q'
        }


        const response = await request(app).post('/api/users/signup').send(newUser)
        expect(response.statusCode).toBe(201)
        const { body } = response;
        expect(body.token).toBeTruthy()
        const { email } = body.user
        const {token}  = await User.findOne({email})
        expect(body.token).toBe(token)
    })

    test('tets response Object', async () => {
        const newUser = {
            email: 'test49@gmail.com',
            password: '0286390q'
        }

        const desireResponse = {
            email:'test49@gmail.com',
            subcsription:'starter'
        }

        const response = await request(app).post('/api/users/signup').send(newUser)
        expect(response.body.user).toMatchObject(desireResponse);
    })
    
})
