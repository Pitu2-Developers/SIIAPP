import * as request from 'supertest';
import app from '../../server'
// import {connect} from '../db/z'

describe('Run app', () => {

    it('should pass the test', (done: Function) => {
        request(app.app)
            .get('/api/test')
            .then((response: any) => {
                expect(response.statusCode).toBe(200)
                done()
            })
    })


})