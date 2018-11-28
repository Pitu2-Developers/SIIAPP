import { IUserDocument, IUserModel } from "../user/user.interface";

export interface IFinancialModel extends IUserModel {

}

export interface IFinancialDocument extends IUserDocument, IFinancialModel {

}