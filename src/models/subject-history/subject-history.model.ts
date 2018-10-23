import { model, Schema, SchemaOptions } from 'mongoose'
import { ISubjectHistoryDocument } from './subject-history.interface';

const options: SchemaOptions = {
    timestamps: true,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}


const SubjectHistorySchema: Schema = new Schema({
    subjectCode: { type: String, required: true },
    /*
        0 ->  Normal
        1 ->  
        2 -> 
    */
    status: { type: Number, default: 0 },
    attempts: { type: Number, default: 1 },
    user: { type: Schema.Types.ObjectId, ref: 'user' }


}, options)


SubjectHistorySchema.virtual('subjectCode', {
    ref: 'subject',
    localField: 'subjectCode',
    foreignField: 'code',
    justOne: true
})


export default model<ISubjectHistoryDocument>('subjecthistory', SubjectHistorySchema)