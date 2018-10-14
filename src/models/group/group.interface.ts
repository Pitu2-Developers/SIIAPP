import { Document } from 'mongoose'
import { ID } from '../../types';


interface Timetable {
    startTime: number,
    endTime: number,
    day: number,
    classroom: string,

}

interface Subject {
    subject: ID,
    teacher: ID,
    timetable: Timetable[]
}


export interface IGroupModel {
    semester: number,
    group: string,
    subjects: Subject[]

}

export interface IGroupDocument extends Document, IGroupModel {



}