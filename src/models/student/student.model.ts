import User from '../user/user.model'
import { Schema, SchemaOptions, HookNextFunction } from 'mongoose';
import { IStudentDocument } from './student.interface';
import { EnrollmentProcessHelpers } from '../../helpers/enrollment-process.helpers'
import { SchoolYearHelpers } from '../../helpers/school-year.helpers';
import { Step } from '../enrollment-process/enrollment-process.interface';
const enrollment = new EnrollmentProcessHelpers()
const schoolYear = new SchoolYearHelpers()

const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    // versionKey: false,
    id: false,
    discriminatorKey: 'role'
}




const ParentSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    income: { type: Number, default: 0 },
    address: {
        street: { type: String, required: true },
        postalCode: Number,
        municipality: String,
        state: String,
    }


}, { id: false, _id: false })

const SocioEconomic: Schema = new Schema({
    mother: ParentSchema,
    father: ParentSchema,
    /* 
        0 -> Mother
        1 -> Father 
    */
    economicSupporter: { type: Number, default: 0 },
    home: {
        rooms: { type: Number, default: 1 },
        /* 
            0 -> own house
            1 ->  appartment
        */
        houseType: { type: Number, default: 0 },
        persons: { type: Number, default: 1 }
    },
    persons: { type: Number, default: 1 },
    emergencyData: {
        bloodType: { type: String, default: 'O+' },
        /*
            0 -> IMSS
            1 -> ISSTE
        */
        medicalService: { type: Number, default: 0 },
        address: {
            street: { type: String, required: true },
            postalCode: Number,
            municipality: String,
            state: String,
        },
        phone: String,

    }


}, { id: false, _id: false })




const StudentSchema: Schema = new Schema({
    /*
        (0) Applicant
        (1) Sistemas
        (2) Industrial
        (3) Food Industry 
        (4) Enviromental 
        (5) Business Management
    */
    career: { type: Number, enum: [0, 1, 2, 3, 4, 5] },
    /*
        (0) Sin Especialidad
    */
    specialty: { type: Number, default: 0 },

    semester: { type: Number, default: 0 },

    socioEconomic: SocioEconomic,
    schoolYears: [{ type: Schema.Types.ObjectId, ref: 'schoolyear' }]

}, options)


class Student {
    private _id: Schema.Types.ObjectId
    private schoolYears: Schema.Types.ObjectId[]

    get isStudent() {

        return (async () => {
            return (await enrollment.getIsComplete(this._id) && this.schoolYears.length > 0)
        })()
    }
}

StudentSchema.loadClass(Student)





StudentSchema.pre('save', async function (next: HookNextFunction) {
    const _: IStudentDocument = this as IStudentDocument
    try {
        if (_.isNew) {
            const steps: Step[] = [{ step: 1, deparment: 0 }, { step: 2, deparment: 1 }, { step: 3, deparment: 2 }, { step: 4, deparment: 1 }]
            await enrollment.create({ _user: this._id, steps })
        }
        next()
    } catch (error) {
        console.log(error);

        next(new Error('Something went wrong'))
    }

})

StudentSchema.pre('remove', async function (next: HookNextFunction) {
    const _: IStudentDocument = this as IStudentDocument

    try {
        await enrollment.remove(_._id)
        if (_.schoolYears.length > 0)
            for (let _id in _.schoolYears) {
                await schoolYear.remove(_id)
            }

        next()
    } catch (error) {
        next(new Error('Something went wrong >:'))
    }

})




export default User.discriminator<IStudentDocument>('student', StudentSchema)


