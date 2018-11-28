import { connect } from "../../../models";
import * as request from 'supertest';
import app from '../../../server'
const data: any = require('../../../../subjects.json')


export const _beforeAll = async (done) => {
    await connect()
    done()
}


export const addSubjects = async (done) => {
    for (let subject of data.subjects) {
        const response = await request(app.getApp().callback()).post('/api/subject')
            .send(subject)
        console.log(response.body);
        expect(response.status).toBe(200)
        // console.log(subject);

        done()

    }
}

export const getAllStudents = async (done) => {
    const response = await request(app.getApp().callback()).get('/api/student')
    // console.log(response.status)
    const students = response.body
    console.log(students);

    expect(response.status).toBe(200)
    done()

}
