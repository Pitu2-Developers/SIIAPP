import { IUserModel, IUserDocument } from '../user/user.interface';
import { ID } from '../../types';

export interface IStudentModel extends IUserModel {
    semester?: number,
    group?: string,
    career?: number
}

export interface IStudentDocument extends IStudentModel, IUserDocument {



}