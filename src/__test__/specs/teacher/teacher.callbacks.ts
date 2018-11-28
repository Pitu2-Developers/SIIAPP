import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
import { ITeacherModel } from '../../../models/teacher/teacher.interface';

export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const update = async (done) => {
    const teacherID: string = '5bcf875fcb53c347b5d190d0',
        updatedTeacher: Partial<ITeacherModel> = {
            email: 'new@gmail.com'
        }
    const response = await request(app.getApp().callback()).put(`/api/teacher/${teacherID}`)
        .send(updatedTeacher)

    expect(response.status).toBe(200)
    done()

}

export const remove = async (done) => {
    const teacherID: string = '5bcf74a0a5bc2528dfada7c8'
    const response = await request(app.getApp().callback()).delete(`/api/teacher/${teacherID}`)
    expect(response.status).toBe(200)
    done()

}

export const create = async (done) => {
    const teacher: ITeacherModel = {
        email: 'teacher0@gmail.com',
        firstName: 'Tavo',
        lastName: 'Guerrero',
        gender: 'M',
        password: '12345678',
        age: 50
    }
    const response = await request(app.getApp().callback()).post('/api/teacher')
        .send(teacher)

    expect(response.status).toBe(200)
    done()


}