import User from '../user/user.model'
import { Schema, SchemaOptions } from 'mongoose';
import { ITeacherDocument } from './teacher.interface';

const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    // versionKey: false,
    id: false,
    discriminatorKey: 'role'
}



const TeacherSchema: Schema = new Schema({
    //ADD CUSTOM PROPERTIES.

}, options)

export default User.discriminator<ITeacherDocument>('teacher', TeacherSchema)