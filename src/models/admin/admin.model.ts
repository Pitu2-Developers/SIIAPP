import { model, Schema, SchemaOptions } from 'mongoose'
import { IAdminDocument } from './admin.interface';
const options: SchemaOptions = {

}

const AdminSchema: Schema = new Schema({
    isAdmin: { type: Boolean, default: true }
}, options)


export default model<IAdminDocument>('admin', AdminSchema)