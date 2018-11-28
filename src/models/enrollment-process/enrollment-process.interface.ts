import { ID } from "../../types";
import { Document } from "mongoose";


interface File {
    _type: number,
    file: string
}

export interface Step {
    step: number
    deparment: number,
    isComplete?: boolean,
    documents?: File | File[]
}


export interface IEnrollmentProcessModel {
    _user: ID,
    steps?: Step[]
    // steps?: [
    //     {
    //         deparment: number,
    //         isComplete: boolean,
    //         document: File
    //     },
    //     {
    //         deparment: number,
    //         isComplete: boolean,
    //         documents: File[]
    //     },
    //     {
    //         deparment: number,
    //         isComplete: boolean,
    //     },
    //     {
    //         deparment: number,
    //         isComplete: boolean,
    //         document: File
    //     }
    // ]
}


export interface IEnrollmentProcessDocument extends Document, IEnrollmentProcessModel {

    isComplete: boolean
}