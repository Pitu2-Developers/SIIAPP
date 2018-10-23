import * as request from 'supertest';
import app from '../../server'
import { IStudentModel } from '../../models/student/student.interface';
import { connect } from '../../models';
import { ITeacherModel } from '../../models/teacher/teacher.interface';
const data: any = require('../../../subjects.json')

describe('/api/* [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })


    it.skip('should update a teacher by ip', async (done) => {
        const teacherID: string = '5bcf875fcb53c347b5d190d0',
            updatedTeacher: Partial<ITeacherModel> = {
                email: 'new@gmail.com'
            }
        const response = await request(app.getApp().callback()).put(`/api/teacher/${teacherID}`)
            .send(updatedTeacher)

        expect(response.status).toBe(200)
        done()

    })

    it.skip('should create a new teacher', async (done) => {
        const teacher: ITeacherModel = {
            email: 'albita@gmail.com',
            firstName: 'Albita',
            lastName: 'Guerrero',
            gender: 'M',
            password: '12345678'
        }
        const response = await request(app.getApp().callback()).post('/api/teacher')
            .send(teacher)

        expect(response.status).toBe(200)
        done()


    })

    it.skip('should delete a teacher by ID', async (done) => {
        const teacherID: string = '5bcf74a0a5bc2528dfada7c8'
        const response = await request(app.getApp().callback()).delete(`/api/teacher/${teacherID}`)
        // console.log(response.error.text);

        expect(response.status).toBe(200)
        done()



    })



})