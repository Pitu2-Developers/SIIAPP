import User from '../user/user.model'
import { Schema, SchemaOptions } from 'mongoose';
import { IStudentDocument } from './student.interface';

const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
    id: false,
    discriminatorKey: 'role'
}


const groups: string[] = ['A', 'B', 'C']

const StudentSchema: Schema = new Schema({
    semester: { type: Number, default: 0 },
    group: { type: String, enum: groups, default: 'A' },

}, options)



export default User.discriminator<IStudentDocument>('Student', StudentSchema)


