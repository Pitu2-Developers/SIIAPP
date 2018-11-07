import { Document } from 'mongoose'
import { ID } from '../../types';


interface Timetable {
    startTime: number,
    endTime: number,
    day: number,
    classroom: string,

}

interface Subject {
    subjectCode: string,
    teacher: ID,
    timetable: Timetable[]
}


export interface IGroupModel {
    semester: number,
    group: string,
    subjects: Subject[],
    academicYear?: string

}

export interface IGroupDocument extends Document, IGroupModel {



}