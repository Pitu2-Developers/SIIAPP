import * as request from 'supertest';
import app from '../../server'
import { AppConfig } from '../../types';


describe('Testing app config', () => {

    it.skip('should get a app config', async () => {
        const response = await request(app.getApp().callback()).get('/api/admin/app')

        expect(response.status).toBe(200)


    })

    it.skip('should update app config file', async (done) => {
        const currentTime: Date = new Date()
        const cfg: AppConfig = {
            enrollment: false,
            timetableSelection: {
                isActive: false,
                carrer: 1,
                startTime: currentTime,
                endTime: new Date(currentTime.getTime() + (20 * 60 * 1000))
            }
        }
        const response = await request(app.getApp().callback()).put('/api/admin/app').send(cfg)
        expect(response.status).toBe(200)
        done()
    })



})