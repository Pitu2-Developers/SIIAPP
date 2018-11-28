import * as request from 'supertest';
import app from '../../../server'
import { connect } from "../../../models";
import { Step } from '../../../models/enrollment-process/enrollment-process.interface';


export const _beforeAll = async (done) => {
    await connect()
    done()

}

export const remove = async (done) => { }
export const update = async (done) => {
    /*
            0-> Acuerdo entre partes
            1-> Solicitud de inscripcion
            2-> Certificado de bachillerato
            3-> Acta de nacimiento
            4-> CURP
            5-> Certificado medico
            6-> Comporbante de NSS
            7-> Recibo de pago
            8-> Boucher
        */
    const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmZiNTkyNjhjYzVjODE5MjRlNWUxNTkiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTU0MzE5OTQ2MiwiZXhwIjoxNTQzMjg1ODYyfQ.KyoAoyyTxB-DgqtxLDnyLt9hFcA_RB7waXeTWoR-1ow'
    const headers = { Authorization: `Bearer ${token}` }

    const step: Partial<Step> = {
        step: 2,
        isComplete: true,
        deparment: 0,
        documents: { _type: 8, file: 'boucher.png' }
    }
    const response = await request(app.getApp().callback()).put(`/api/enrollmentprocesses`)
        .set(headers)
        .send(step)


    console.log(response.error.text);

    expect(response.status).toBe(204)
    done()

}