import * as request from 'supertest';
import app from '../../server'
import { connect } from '../../models';
const data: any = require('../../../subjects.json')
import { IAdminModel } from '../../models/admin/admin.interface'

describe('/admin/* [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })


    it.skip('should create a admin', async (done) => {
        const admin: IAdminModel = {
            email: 'admin@admin.com',
            firstName: 'Nacho',
            lastName: 'Castillo',
            gender: 'M',
            isAdmin: true,
            password: '12345678'
        }
        const response = await request(app.getApp().callback()).post('/admin/signup')
            .send(admin)
        console.log(response.error.text)
        // const students = response.body
        // console.log(students);

        expect(response.status).toBe(200)
        done()

    })



})