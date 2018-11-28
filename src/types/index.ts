import { Schema } from 'mongoose'
import { IStudentDocument } from '../models/student/student.interface';
import { ITeacherDocument } from '../models/teacher/teacher.interface';

export interface TokenDecodedPayload {
    sub: ID,
    role: string
}
export interface TokenPayload {
    iat: number,
    exp: number,
    sub: ID,
    role: string
}

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

interface Career {
    career: number,
    start: Date,
    end: Date
}


interface TimetableSelection {
    isActive: boolean,
    careers: Career[],

}

export interface AppConfig {
    academicYear: string,
    devMode: boolean,
    enrollmentMode: boolean,
    timetableSelection?: TimetableSelection,


}
