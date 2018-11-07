import * as request from 'supertest';
import app from '../../server'
import { connect } from '../../models';
import { IStudentModel } from '../../models/student/student.interface';
const data: any = require('../../../subjects.json')

describe('/api/* [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })


    it.skip('should update a student by id', async (done) => {
        const studentID: string = '5bcf875fcb53c347b5d190d0',
            updatedstudent: Partial<IStudentModel> = {
                email: 'new@gmail.com'
            }
        const response = await request(app.getApp().callback()).put(`/api/student/${studentID}`)
            .send(updatedstudent)

        expect(response.status).toBe(200)
        done()

    })


    it.skip('should delete a student by ID', async (done) => {
        const studentID: string = '5bcf74a0a5bc2528dfada7c8'
        const response = await request(app.getApp().callback()).delete(`/api/student/${studentID}`)
        // console.log(response.error.text);

        expect(response.status).toBe(200)
        done()



    })



})