
import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';


export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const create = async (done) => {
    const response = await request(app.getApp().callback()).post(`/api/subjectinfo`)
    console.log(response.error.text);

    expect(response.status).toBe(200)
    done()


}