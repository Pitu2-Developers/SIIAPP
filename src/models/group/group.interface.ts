import { Document } from 'mongoose'
import { ID } from '../../types';




export interface IGroupModel {
    semester: number,
    group: string,
    subjects: ID[],
    academicYear: string
}

export interface IGroupDocument extends Document, IGroupModel {



}