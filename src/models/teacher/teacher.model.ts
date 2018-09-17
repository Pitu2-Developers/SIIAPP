import User from '../user/user.model'
import { Schema } from 'mongoose';
import { ITeacherDocument } from './teacher.interface';


const TeacherSchema: Schema = new Schema({
    //ADD CUSTOM PROPERTIES.

})

export default User.discriminator<ITeacherDocument>('Teacher', TeacherSchema)