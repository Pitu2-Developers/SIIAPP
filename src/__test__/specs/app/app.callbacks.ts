import * as request from 'supertest';
import app from '../../../server'
import { AppConfig } from '../../../types';


export const getCfg = async () => {
    const response = await request(app.getApp().callback()).get('/api/admin/app')

    expect(response.status).toBe(200)


}

export const update = async (done) => {
    const currentTime: Date = new Date()
    const cfg: AppConfig = {
        academicYear: 'AGO-DIC/18',
        devMode: false,
        enrollmentMode: true,
        timetableSelection: {
            isActive: false,
            // careers: [],
            careers: []
        }
    }
    const response = await request(app.getApp().callback()).put('/admin/app/config').send(cfg)
    console.log(response.error);

    expect(response.status).toBe(204)
    done()
}