import * as request from 'supertest';
import app from '../../server'
import { connect } from '../../models';
import { IStudentModel } from '../../models/student/student.interface';
const data: any = require('../../../subjects.json')

describe('/api/student [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })


    it.skip('should update a student by id', async (done) => {
        const studentID: string = '5be764461430705d5503c2e6',
            updatedstudent: Partial<IStudentModel> = {
                email: 'new3@gmail.com'
            }
        const response = await request(app.getApp().callback()).put(`/api/student/${studentID}`)
            .send(updatedstudent)

        console.log(response.error.text);

        expect(response.status).toBe(200)
        done()

    })



    it.skip('should delete a student by ID', async (done) => {
        const studentID: string = '5be746d84c7aca4389ac744c'
        const response = await request(app.getApp().callback()).delete(`/api/student/${studentID}`)
        console.log(response.error.text);

        expect(response.status).toBe(200)
        done()



    })



})