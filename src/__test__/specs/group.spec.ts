import * as request from 'supertest';
import app from '../../server'
import { connect } from '../../models';
import { IGroupModel } from '../../models/group/group.interface';


describe('/api/* [TEST]', () => {
    beforeAll((done) => {
        //CONNECT MONGODB
        connect().then(res => {
            done()
        })
    })


    it.skip('should update a group by id', async (done) => {
        const groupID: string = ''
        const response = await request(app.getApp().callback()).put(`/api/group/${groupID}`)
            .send({})

        expect(response.status).toBe(200)
        done()

    })

    it.skip('should create a new group', async (done) => {
        const group: IGroupModel = {
            // academicYear:
            group: 'A',
            semester: 1,
            subjects: [
                {
                    subjectCode: 'ISI11',
                    teacher: '5bd63ed2d0131c1a881e5a89',
                    timetable: [
                        {
                            classroom: 'C2',
                            day: 1,
                            endTime: 10,
                            startTime: 9,
                        }
                    ]
                }
            ]
        }
        const response = await request(app.getApp().callback()).post('/api/group')
            .send(group)

        expect(response.status).toBe(200)
        done()


    })

    it.skip('should delete a group by ID', async (done) => {
        const groupID: string = '5bd6323c12c00c0a564364f0'

        // console.log(response.error.text);
        // try {
        const response = await request(app.getApp().callback()).delete(`/api/group/${groupID}`)
        console.log(response.error.text);

        expect(response.status).toBe(200)


        done()



    })



})