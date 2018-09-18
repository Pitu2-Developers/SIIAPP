import { Document } from 'mongoose'

export interface ISubjectModel {
    name: string,
    code: string,
    semester: number

}

export interface ISubjectDocument extends Document, ISubjectModel {


}