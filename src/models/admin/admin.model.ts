import { model, Schema, SchemaOptions } from 'mongoose'
import { IAdminDocument } from './admin.interface';
import User from '../user/user.model'


const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    // versionKey: false,
    id: false,
    discriminatorKey: 'role'
}



const AdminSchema: Schema = new Schema({
    isAdmin: { type: Boolean, default: true }
}, options)


export default User.discriminator<IAdminDocument>('admin', AdminSchema)