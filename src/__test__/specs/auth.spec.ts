import * as request from 'supertest';
import app from '../../server'

describe(' /auth/* [TEST]', () => {

    it.skip('should POST /auth/signin response 200', async (done: Function) => {
        const response = await request(app.getApp().callback()).post('/auth/signin')
        expect(response.status).toBe(200)
        done()
    })


    it('should create a user POST /auth/signup ', async (done: Function) => {
        const user: any = {
            firstName: 'Nacho',
            lastName: 'Castillo',
            email: 'test@gmail.com',
            password: '12345678',
            gender: 'M'
        }

        const response = await request(app.getApp().callback())
            .post('/auth/signup').send(user)



        expect(response.status).toBe(200)
        done()
    })


})