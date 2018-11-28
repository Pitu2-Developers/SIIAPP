import { Document } from "mongoose";
import { ID } from "../../types";



export interface ISubjectGroupModel {
    students: ID[],
    subject: ID,
    isDone: boolean
}



export interface ISubjectGroupDocument extends Document, ISubjectGroupModel {

}