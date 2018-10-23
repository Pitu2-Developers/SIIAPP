import { Document } from 'mongoose'

export interface ISubjectModel {
    name: string,
    code: string,
    semester: number,
    credits: number,
    isActive: boolean,

}

export interface ISubjectDocument extends Document, ISubjectModel {


}