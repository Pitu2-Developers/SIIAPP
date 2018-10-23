import User from '../user/user.model'
import { Schema, SchemaOptions } from 'mongoose';
import { IStudentDocument } from './student.interface';

const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    // versionKey: false,
    id: false,
    discriminatorKey: 'role'
}



const StudentSchema: Schema = new Schema({
    isStudent: { type: Boolean, default: false },
    /*
        (1) Sistemas
        (2) Industrial
        (3) Alimentarias
        (4) Ambiental
        (5) IGE 
    */
    career: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
    /*
        (0) Sin Especialidad
    */
    specialty: { type: Number, default: 0 },
    semester: { type: Number, default: 0 }

}, options)



export default User.discriminator<IStudentDocument>('student', StudentSchema)


