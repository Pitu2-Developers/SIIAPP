import { model, Schema, SchemaOptions, HookNextFunction } from 'mongoose'
import { ISchoolYearDocument } from './school-year.interface';
import { SubjectHistoryHelpers } from '../../helpers/subject-history.helpers';
import { AppHelpers } from '../../helpers/app.helpers';

const { getAppConfig } = new AppHelpers()


const { remove } = new SubjectHistoryHelpers()


const options: SchemaOptions = {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
}


const SchoolYearSchema: Schema = new Schema({
    semester: { type: Number, required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'subjecthistory' }],
    academicYear: { type: String },
    isActive: { type: Boolean, default: false }

}, options)


SchoolYearSchema.pre('save', function (next: HookNextFunction) {
    const _: ISchoolYearDocument = this as ISchoolYearDocument
    _.academicYear = getAppConfig().academicYear
    next()
});

SchoolYearSchema.pre('remove', async function (next: HookNextFunction) {
    const _: ISchoolYearDocument = this as ISchoolYearDocument
    try {
        for (let _id in _.subjects) {
            await remove(_id)
        }
    } catch (error) {
        next(new Error('Something went wrong >:'))

    }
})


export default model<ISchoolYearDocument>('schoolyear', SchoolYearSchema)