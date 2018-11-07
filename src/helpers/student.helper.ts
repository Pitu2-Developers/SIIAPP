import Student from '../models/student/student.model'
import { genSaltSync, hashSync } from 'bcrypt';
import { SALT_FACTOR } from '../config';
import { IStudentModel, IStudentDocument } from '../models/student/student.interface';
import { ID } from '../types';

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
        return new Student(data).save()
    }

    async updateStudent(_id: ID, data: Partial<IStudentModel>) {
        try {
            const res = await Student.findByIdAndUpdate({ _id }, data)
            if (!res) throw { status: 418, message: `Student doesn't exist.` }

        } catch (error) {
            throw error
        }
    }
}



