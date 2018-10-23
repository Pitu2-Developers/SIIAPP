import { Schema } from 'mongoose'
import { IStudentDocument } from '../models/student/student.interface';
import { ITeacherDocument } from '../models/teacher/teacher.interface';

export interface IError {
    status: number,
    message: string
}

export type ID = Schema.Types.ObjectId | string
export type IUser = IStudentDocument & ITeacherDocument
export type AuthResponse = {
    user: IUser,
    token: string
}
export type Credentials = {
    email: string,
    password: string
}


interface TimetableSelection {
    isActive: boolean,
    carrer: number,
    startTime: Date,
    endTime: Date
}

export interface AppConfig {
    enrollment: boolean,
    timetableSelection?: TimetableSelection,


}
