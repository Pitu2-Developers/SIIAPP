import { Document } from 'mongoose'
import { ID } from '../../types';

export interface ISubjectHistoryModel {
    subjectCode: string,
    attempts?: number,
    status?: number

}
export interface ISubjectHistoryDocument extends Document, ISubjectHistoryModel { }
