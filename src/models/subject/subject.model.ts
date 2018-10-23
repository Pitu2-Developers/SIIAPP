import { Schema, model, SchemaOptions } from 'mongoose'
import { ISubjectDocument } from './subject.interface';

const options: SchemaOptions = {
    timestamps: true,
    id: false
}


const SubjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    credits: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    semester: { type: Number, required: true },
    requisites: [String]

}, options)


export default model<ISubjectDocument>('subject', SubjectSchema)