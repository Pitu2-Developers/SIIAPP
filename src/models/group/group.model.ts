import { Schema, model, SchemaOptions } from 'mongoose'
import { IGroupDocument } from './group.interface';
const options: SchemaOptions = {
    id: false,
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
const documentOptions: SchemaOptions = {
    _id: false,
    id: false
}


const TimetableSchema: Schema = new Schema({
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    day: { type: Number, default: 1 },
    classroom: { type: String, required: true }
}, documentOptions)

const SubjectSchema: Schema = new Schema({
    subject: { type: Schema.Types.ObjectId, ref: 'subject' },
    teacher: { type: Schema.Types.ObjectId, ref: 'user' },
    schedule: [TimetableSchema]
}, documentOptions)


const GroupSchema: Schema = new Schema({
    semester: { type: Number, required: true },
    group: { type: String, enum: ['A', 'B', 'C', 'D', 'E'], required: true },
    subjects: [SubjectSchema],

}, options);


export default model<IGroupDocument>('Group', GroupSchema);
