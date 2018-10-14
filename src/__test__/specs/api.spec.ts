import * as request from 'supertest';
import app from '../../server'
import { IStudentModel } from '../../models/student/student.interface';
import { connect } from '../../models';


describe('/api/* [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })


    it.skip('should get all students', async (done) => {
        const response = await request(app.getApp().callback()).get('/api/student')
        // console.log(response.status)
        const students = response.body
        // console.log(response.body);

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

        const response = await request(app.getApp().callback()).post('/api/student')
            .send(student)
        // console.log(response.status)
        expect(response.status).toBe(200)
        done()
    })


})