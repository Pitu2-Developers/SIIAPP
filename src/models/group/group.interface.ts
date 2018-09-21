import { Document } from 'mongoose'
import { ID } from '../../types';

interface Subject {
    subject: ID,
    teacher: ID
}


export interface IGroupModel {
    group: string,
    subjects: Subject[]

}

export interface IGroupDocument extends Document, IGroupModel {



}