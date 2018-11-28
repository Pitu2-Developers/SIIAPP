import * as request from 'supertest';
import app from '../../../server'
import { IStudentModel } from '../../../models/student/student.interface'
import { connect } from '../../../models'

export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const logout = async (done) => {
    const response = await request(app.getApp().callback()).put('/auth/logout')
        .set({ Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmZiMTlmZDNhNmZkMjc5NTk4MGRhZWQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTU0MzE4NDg0NiwiZXhwIjoxNTQzMjcxMjQ2fQ.JJA-LqHLIwtayldt_jFZ6mrAQVmwpog-zBHbR1e4jgE.eyJzdWIiOiI1YmViOGEyZTBjZjM0YzIzODllNTRjOTYiLCJhaXQiOjE1NDIyMzM1MjAsImV4cCI6MTU0MjMxOTkyMH0.htXWNz6DRp-X6CEfIL0Cwuw0PbQMuJCO20pMZDIsLoY' })
    expect(response.status).toBe(200)
    done()

}


export const signin = async (done: Function) => {
    const response = await request(app.getApp().callback()).post('/auth/signin')
        .send({
            email: 'student1@gmail.com',
            password: '12345678'
        })
    console.log(response.body);

    expect(response.status).toBe(200)
    done()
}


export const signup = async (done: Function) => {
    const student: IStudentModel = {
        career: 1,
        email: 'student1@gmail.com',
        firstName: 'Nacho',
        lastName: 'Castillo Barrios',
        gender: 'M',
        password: '12345678',
        age: 20

    }

    const response = await request(app.getApp().callback()).post('/auth/signup')
        .send(student)

    console.log(response.error.text)
    expect(response.status).toBe(201)
    done()
}