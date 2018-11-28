import { model, Schema, SchemaOptions } from 'mongoose'


const options: SchemaOptions = {
    timestamps: true
}
const UserActivitySchema: Schema = new Schema({
    action: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'user' },
}, options)


export default model('user-activity', UserActivitySchema)