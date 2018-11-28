import { Document } from 'mongoose'

export interface ISubjectModel {
    name: string,
    code: string,
    semester: number,
    credits: number,
    isActive: boolean,
    career: number

}

export interface ISubjectDocument extends Document, ISubjectModel {


}