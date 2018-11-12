import { IUserModel, IUserDocument } from "../user/user.interface";

export interface ISchoolAdministratorModel extends IUserModel {


}

export interface ISchoolAdministratorDocument extends IUserDocument, ISchoolAdministratorModel {

}