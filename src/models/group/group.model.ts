import { Schema, model, SchemaOptions } from 'mongoose'
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


const ScheduleSchema: Schema = new Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    day: { type: Number, default: 1 }
}, documentOptions)

const SubjectSchema: Schema = new Schema({
    subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    schedule: [ScheduleSchema]
}, documentOptions)


const GroupSchema: Schema = new Schema({
    group: { type: String, required: true },
    subjects: [SubjectSchema],

}, options);


export default model('Group', GroupSchema);
