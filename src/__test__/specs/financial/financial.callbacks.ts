import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
import { IFinancialModel } from '../../../models/financial/financial.interface'
import { HTTP_201_CREATED, HTTP_204_NO_CONTENT } from '../../../controllers';


export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const update = async (done) => {
    const financialID: string = '5bfedf61247c1228cdb2ead2',
        data: Partial<IFinancialModel> = {
            email: 'financialupdate@gmail.com'
        }

    const response = await request(app.getApp().callback()).put(`/api/financials/${financialID}`)
        .send(data)

    console.log(response.error.text);

    expect(response.status).toBe(HTTP_204_NO_CONTENT)
    done()

}

export const remove = async (done) => {
    const financialID: string = '5bfedf61247c1228cdb2ead2'
    const response = await request(app.getApp().callback()).delete(`/api/financials/${financialID}`)
    console.log(response.error.text);

    expect(response.status).toBe(HTTP_204_NO_CONTENT)
    done()
}

export const create = async (done) => {
    const data: IFinancialModel = {
        age: 25,
        email: 'financial@gmail.com',
        firstName: 'Juan',
        lastName: 'Perez',
        gender: 'M',
        password: '12345678'
    }
    const response = await request(app.getApp().callback()).post(`/api/financials`)
        .send(data)
    console.log(response.error.text);
    expect(response.status).toBe(HTTP_201_CREATED)
    done()


}