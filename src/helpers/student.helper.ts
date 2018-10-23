import Student from '../models/student/student.model'
import { genSaltSync, hashSync } from 'bcrypt';
import { SALT_FACTOR } from '../config';
import { IStudentModel, IStudentDocument } from '../models/student/student.interface';

export function hashPassword(password: string): string {
    const salt: string = genSaltSync(SALT_FACTOR)
    return hashSync(password, salt)
}


export class StudentHelpers {
    constructor() { }


    getStudents(): Promise<IStudentDocument[]> {
        return Student.find().then((res: IStudentDocument[]) => res)
    }


    createStudent(data: IStudentModel): Promise<IStudentDocument> {
        const user: Promise<IStudentDocument> = new Student(data).save()
        return user

    }
}



