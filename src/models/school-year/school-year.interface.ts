import { Document } from 'mongoose'
import { ID } from '../../types';

export interface ISchoolYearModel {
    semester: number,
    subjects: ID[],
    academicYear?: string,
    isActive?: boolean


}

export interface ISchoolYearDocument extends Document, ISchoolYearModel {


}