import * as request from 'supertest';
import app from '../../server'
import { IStudentModel } from '../../models/student/student.interface';
import { connect } from '../../models';
const data: any = require('../../../subjects.json')

describe('/api/* [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })






    it.skip('should add new subjects', async (done) => {
        for (let subject of data.subjects) {
            const response = await request(app.getApp().callback()).post('/api/subject')
                .send(subject)
            console.log(response.body);
            expect(response.status).toBe(200)
            // console.log(subject);

            done()

        }

        // console.log(subjects);

        // expect(1).toBe(1)
        // done()

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