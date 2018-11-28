import { Document } from 'mongoose'
import { ID } from '../../types';

export interface ISubjectHistoryModel {
    subject: ID,
    status?: number,
    attempts?: number,
    isFail?: boolean

}
export interface ISubjectHistoryDocument extends Document, ISubjectHistoryModel { }
