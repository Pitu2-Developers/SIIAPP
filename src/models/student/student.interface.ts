import { IUserModel, IUserDocument } from '../user/user.interface';
import { ID } from '../../types';

export interface IStudentModel extends IUserModel {
    career: number,
    isStudent?: boolean,
    specialty?: number
}

export interface IStudentDocument extends IStudentModel, IUserDocument {



}