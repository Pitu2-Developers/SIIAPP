import { Schema, model } from 'mongoose'
import { ISubjectDocument } from './subject.interface';

const SubjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    semester: { type: Number, required: true },

})

export default model<ISubjectDocument>('Subject', SubjectSchema)