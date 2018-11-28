import { model, Schema, SchemaOptions, HookNextFunction } from 'mongoose'
import { ISubjectHistoryDocument } from './subject-history.interface';
import { SubjectInfoHelpers } from '../../helpers/subject-info.helpers';
import { ISubjectInfoDocument } from '../subject-info/subject-info.interface';
const { remove } = new SubjectInfoHelpers()

const options: SchemaOptions = {
    timestamps: true,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}


const SubjectHistorySchema: Schema = new Schema({
    subject: { type: Schema.Types.ObjectId, ref: 'subjectinfo', required: true },
    /*
        0 ->  Normal
        1 ->  
        2 -> 
    */
    status: { type: Number, default: 0 },
    attempts: { type: Number, default: 1 },
    isFail: { type: Boolean, default: false },


}, options)


SubjectHistorySchema.virtual('subjectCode', {
    ref: 'subject',
    localField: 'subjectCode',
    foreignField: 'code',
    justOne: true
})




export default model<ISubjectHistoryDocument>('subjecthistory', SubjectHistorySchema)