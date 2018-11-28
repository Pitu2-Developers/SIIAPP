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
    /*
      (0) ALL
      (1) Sistemas
      (2) Industrial
      (3) Food Industry 
      (4) Enviromental 
      (5) Business Management
  */
    career: { type: Number, required: true }

}, options)


export default model<ISubjectDocument>('subject', SubjectSchema)