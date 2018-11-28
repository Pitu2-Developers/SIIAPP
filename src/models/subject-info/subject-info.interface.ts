import { Document } from "mongoose";
import { ID } from "../../types";


interface Timetable {
    startTime: string,
    endTime: string,
    day: number,
    classroom: string
}


export interface ISubjectInfoModel {
    teacher: ID,
    group: string,
    subject: ID,
    timetable: Timetable[]

}


export interface ISubjectInfoDocument extends Document, ISubjectInfoModel {


}