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
        console.log(students);

        expect(response.status).toBe(200)
        done()

    })



})