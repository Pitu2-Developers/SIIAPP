import Teacher from '../models/teacher/teacher.model'
import { ITeacherDocument, ITeacherModel } from '../models/teacher/teacher.interface'

export default class TeacherHelpers {

    constructor() { }


    public createTeacher(data: ITeacherModel) {
        return new Teacher(data).save().then()
    }



}