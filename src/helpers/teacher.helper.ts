import Teacher from '../models/teacher/teacher.model'
import { ITeacherDocument, ITeacherModel } from '../models/teacher/teacher.interface'
import { ID } from '../types';

export default class TeacherHelpers {

    constructor() { }


    createTeacher(data: ITeacherModel): Promise<ITeacherDocument> {
        return new Teacher(data).save()
    }

    async deleteTeacher(_id: ID): Promise<void> {
        try {
            const res = await Teacher.findByIdAndRemove({ _id })
            if (!res) throw { status: 418, message: `Teacher doesn't exist.` }
        } catch (error) {

            throw error
        }
    }

    async updateTeacher(_id: ID, data: Partial<ITeacherModel>): Promise<void> {
        try {
            const res = await Teacher.findByIdAndUpdate({ _id }, data)
            if (!res) throw { status: 418, message: `Teacher doesn't exist.` }

        } catch (error) {
            throw error
        }
    }



}