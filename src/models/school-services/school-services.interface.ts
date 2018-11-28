import { IUserModel, IUserDocument } from "../user/user.interface";

export interface ISchoolServicesModel extends IUserModel {


}

export interface ISchoolServicesDocument extends IUserDocument, ISchoolServicesModel {

}