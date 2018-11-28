import User from '../user/user.model'
import { Schema, SchemaOptions } from 'mongoose'
import { IFinancialDocument } from './financial.interface';


const options: SchemaOptions = {
    timestamps: true,
    id: false,
    discriminatorKey: 'role'
}

const FinancialSchema: Schema = new Schema({

}, options)



export default User.discriminator<IFinancialDocument>('financial', FinancialSchema)