import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
import { ISchoolYearModel } from '../../../models/school-year/school-year.interface';

export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const create = async (done) => {

    const schoolYear: ISchoolYearModel = {
        semester: 1,
        subjects: []
    }

    const response = await request(app.getApp().callback()).post(`/api/schoolyears`)
        .send(schoolYear)
    console.log(response);
    done()


}
export const update = async (done) => { }
export const remove = async (done) => { }