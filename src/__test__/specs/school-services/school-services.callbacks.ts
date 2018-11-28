import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
const data: any = require('../../../../subjects.json')

export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const update = async (done) => {
    const _id = ''
    const response = await request(app.getApp().callback()).put(`/api/schooladministrator/${_id}`)
    // .send()

    console.log(response.error.text);

    expect(response.status).toBe(200)
    done()

}