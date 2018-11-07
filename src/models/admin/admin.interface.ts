import { Document } from 'mongoose'
import { IUserDocument, IUserModel } from '../user/user.interface';


export interface IAdminModel extends IUserModel {
    isAdmin: boolean
}

export interface IAdminDocument extends Document, IUserDocument {

}