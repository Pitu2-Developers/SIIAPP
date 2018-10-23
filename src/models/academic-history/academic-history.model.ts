import { model, Schema, SchemaOptions } from 'mongoose'
import { IAcademicHistoryDocument } from './academic-history.interface';

const options: SchemaOptions = {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
}

const AcademicHistorySchema: Schema = new Schema({
    semester: { type: Number, required: true },
    subjects: [
        {
            subjectCode: { type: String, required: true },
            grades: [Number]
        }
    ],
    academicYear: { type: String, required: true }


}, options)



export default model<IAcademicHistoryDocument>('academichistory', AcademicHistorySchema)