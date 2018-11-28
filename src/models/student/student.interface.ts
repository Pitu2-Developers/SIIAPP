import { IUserModel, IUserDocument } from '../user/user.interface';
import { ID } from '../../types';

interface EmergencyData {
    medicalService: number,
    bloodType: string,
    address: Address,
    phone: string
}
interface Home {
    rooms: number,
    houseType: number,
    persons: number
}

interface Address {
    street: string,
    postalCode: number,
    municipality: string,
    state: string
}

interface Parent {
    firstName: string,
    lastName: string,
    phone: string,
    income: number,
    address: Address
}


interface SocioEconomic {
    mother: Parent,
    father: Parent,
    economicSupporter: number,
    home: Home,
    persons: number,
    emergencyData: EmergencyData


}


export interface IStudentModel extends IUserModel {
    career?: number,
    specialty?: number,
    semester?: number,
    socioEconomic?: SocioEconomic,
    schoolYears?: ID[]
}

export interface IStudentDocument extends IStudentModel, IUserDocument {
    isStudent: Promise<boolean>,

}