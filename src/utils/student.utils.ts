
const BASE_URL: string = 'http://localhost:7005'
import $axios from 'axios'
import { IStudentModel } from '../models/student/student.interface';
import { ID } from '../types';



export class StudentUtils {

    async $create(data: IStudentModel | any) {
        try {
            await $axios.post(`${BASE_URL}/auth/signup`, { ...data._doc, uuid: data._id })
        } catch (error) {
            throw error
        }
    }

    async $delete(_id: ID) {
        try {
            await $axios.delete(`${BASE_URL}/api/student/${_id}`)
        } catch (error) {
            throw error
        }
    }

    async $update(_id: ID, data: Partial<IStudentModel>) {
        try {
            await $axios.put(`${BASE_URL}/api/student/${_id}`, data)
        } catch (error) {
            throw error
        }
    }

}