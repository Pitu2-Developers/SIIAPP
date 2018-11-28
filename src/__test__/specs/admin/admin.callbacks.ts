import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
import { IAdminModel } from '../../../models/admin/admin.interface'


export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const create = async (done) => {
    const admin: IAdminModel = {
        email: 'admin@admin.com',
        firstName: 'Nacho',
        lastName: 'Castillo',
        gender: 'M',
        isAdmin: true,
        password: '12345678',
        age: 24
    }
    const response = await request(app.getApp().callback()).post('/admin/signup')
        .send(admin)
    console.log(response.error.text)
    // const students = response.body
    // console.log(students);

    expect(response.status).toBe(201)
    done()

}