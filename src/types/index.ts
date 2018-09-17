import { Schema } from 'mongoose'
import { IStudentDocument } from '../models/student/student.interface';
import { ITeacherDocument } from '../models/teacher/teacher.interface';
export type ID = Schema.Types.ObjectId
export type IUser = IStudentDocument | ITeacherDocument
export type AuthResponse = {
    user: IUser,
    token: string
}
export type Credentials = {
    email: string,
    password: string
}

