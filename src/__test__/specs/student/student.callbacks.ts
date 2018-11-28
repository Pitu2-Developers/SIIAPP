import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
import { IStudentModel } from '../../../models/student/student.interface';

export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const update = async (done) => {
    const studentID: string = '5be764461430705d5503c2e6',
        updatedstudent: Partial<IStudentModel> = {
            email: 'new3@gmail.com'
        }
    const response = await request(app.getApp().callback()).put(`/api/student/${studentID}`)
        .send(updatedstudent)

    console.log(response.error.text);

    expect(response.status).toBe(200)
    done()

}

export const remove = async (done) => {
    const studentID: string = '5bfaed0f5634d35aa65eff9a'
    const response = await request(app.getApp().callback()).delete(`/api/students/${studentID}`)
    console.log(response.error.text);

    expect(response.status).toBe(204)
    done()
}

export const create = async (done) => {
    const studentID: string = '5be746d84c7aca4389ac744c'
    const response = await request(app.getApp().callback()).delete(`/api/student/${studentID}`)
    console.log(response.error.text);

    expect(response.status).toBe(200)
    done()


}