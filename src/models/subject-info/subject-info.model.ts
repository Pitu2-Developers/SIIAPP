import { Schema, SchemaOptions, model } from 'mongoose'


const options: SchemaOptions = {
    timestamps: true
}


const Timetable: Schema = new Schema({
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    day: { type: Number, required: true },
    classroom: { type: String, required: true }

}, { id: false, _id: false })

const SubjectInfoSchema: Schema = new Schema({
    teacher: { type: Schema.Types.ObjectId, ref: 'user' },
    group: { type: String, enum: ['A', 'B', 'C', 'D'], required: true },
    subject: { type: Schema.Types.ObjectId, ref: 'subject', required: true },
    timetable: [Timetable]


}, options)


export default model('subjectinfo', SubjectInfoSchema)