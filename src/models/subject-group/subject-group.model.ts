import { Schema, SchemaOptions, model } from 'mongoose'

const options: SchemaOptions = {}
const SubjectGroupSchema: Schema = new Schema({
    students: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    subject: { type: Schema.Types.ObjectId, ref: 'subject info' },
    isDone: { type: Boolean, default: false }

}, options)

export default model('subjectgroup', SubjectGroupSchema)