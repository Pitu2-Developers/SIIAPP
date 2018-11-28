import * as request from 'supertest';
import app from '../../../server'
import { connect } from '../../../models';
import { IGroupModel } from '../../../models/group/group.interface';
import { ISubjectInfoModel } from '../../../models/subject-info/subject-info.interface';


export const _beforeAll = async (done) => {
    await connect()
    done()
}

export const update = async (done) => {
    const groupID: string = ''
    const response = await request(app.getApp().callback()).put(`/api/groups/${groupID}`)
        .send({})

    expect(response.status).toBe(200)
    done()

}

export const create = async (done) => {
    const group: IGroupModel = {
        group: 'A',
        semester: 1,
        subjects: [],
        academicYear: 'AGO-DIC/18'
    }
    const response = await request(app.getApp().callback()).post('/api/groups')
        .send(group)

    expect(response.status).toBe(200)
    done()


}

export const remove = async (done) => {
    const groupID: string = '5bd6323c12c00c0a564364f0'

    const response = await request(app.getApp().callback()).delete(`/api/groups/${groupID}`)
    console.log(response.error.text);

    expect(response.status).toBe(200)


    done()
}

export const addSubject = async (done) => {
    const _id: string = '5bd63c37a65971148121b4ed',
        subjectinfo: ISubjectInfoModel = {
            group: 'A',
            subject: '5bcf6e87c9fd7a25455c15eb',
            teacher: '5bf369ad111fc14bf24a74c6',
            timetable: [
                {
                    startTime: '8:00',
                    endTime: '10:00',
                    classroom: 'C4',
                    day: 1,
                },
                {
                    startTime: '9:00',
                    endTime: '11:00',
                    classroom: 'C3',
                    day: 3,
                }
            ]
        }
    const subjectInfoId = (await request(app.getApp().callback()).post(`/api/subjectinfo`)
        .send(subjectinfo)).body



    const response = await request(app.getApp().callback()).put(`/api/groups/${_id}/subjectinfo`).send({ _id: subjectInfoId })
    console.log(response.error.text);

    expect(response.status).toBe(200)
    done()
}