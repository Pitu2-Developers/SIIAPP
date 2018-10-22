import * as request from 'supertest';
import app from '../../server'
import { IStudentModel } from '../../models/student/student.interface'
import { connect } from '../../models/'
// jest.setTimeout(10000);



describe(' /auth/* [TEST]', () => {


    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })

    it.skip('should POST /auth/signin response 200', async (done: Function) => {
        const response = await request(app.getApp().callback()).post('/auth/signin')
            .send({
                email: 'student@gmail.com',
                password: '12345678'
            })
        expect(response.status).toBe(200)
        done()
    })



    it.skip('should create a student /api/student POST response 200', async (done: Function) => {
        const student: IStudentModel = {
            career: 1,
            email: 'student@gmail.com',
            firstName: 'Jesus Ignacio',
            lastName: 'Castillo Barrios',
            gender: 'M',
            password: '12345678',

        }

        const response = await request(app.getApp().callback()).post('/auth/signup')
            .send(student)

        console.log(response.error)
        expect(response.status).toBe(200)
        done()
    })






})