import { Schema, model, SchemaOptions } from 'mongoose'
import { ISubjectDocument } from './subject.interface';

const options: SchemaOptions = {
    timestamps: true,
    id: false
}


const SubjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },

}, options)


export default model<ISubjectDocument>('Subject', SubjectSchema)