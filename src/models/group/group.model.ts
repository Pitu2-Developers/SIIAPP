import { Schema, model, SchemaOptions } from 'mongoose'
import { IGroupDocument } from './group.interface';
// import * as  moment from 'moment'
import * as moment from 'moment'

const options: SchemaOptions = {
    id: false,
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
// const documentOptions: SchemaOptions = {
//     _id: false,
//     id: false
// }


// const TimetableSchema: Schema = new Schema({
//     startTime: { type: Number, required: true },
//     endTime: { type: Number, required: true },
//     day: { type: Number, default: 1 },
//     classroom: { type: String, required: true }
// }, documentOptions)

// const SubjectSchema: Schema = new Schema({
//     subjectCode: { type: String, required: true, ref: 'subject' },
//     teacher: { type: Schema.Types.ObjectId, ref: 'user' },
//     schedule: [TimetableSchema]
// }, documentOptions)



const GroupSchema: Schema = new Schema({
    semester: { type: Number, required: true },
    group: { type: String, enum: ['A', 'B', 'C', 'D', 'E'], required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'subject info' }],
    academicYear: { type: String },


}, options);

GroupSchema.pre('save', function (next) {
    const group: IGroupDocument = this as IGroupDocument;
    // academicYear = `${moment().format('MMMM').slice(0, 3).toUpperCase()}-${moment().add(6, 'M').format('MMMM').slice(0, 3).toUpperCase()}/${moment().year()}`



    // group.academicYear = 'AGO-DIC/2018'
    // group.academicYear = academicYear
    next()

})


export default model<IGroupDocument>('Group', GroupSchema);
