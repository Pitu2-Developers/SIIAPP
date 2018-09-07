import * as request from 'supertest';
import app from '../../server'


describe('/api/* [TEST]', () => {

    it('should GET /api/test response 200', async (done: Function) => {
        const response = await request(app.getApp().callback()).get('/api/test')
        console.log(response.status)
        expect(response.status).toBe(200)
        done()
    })


})