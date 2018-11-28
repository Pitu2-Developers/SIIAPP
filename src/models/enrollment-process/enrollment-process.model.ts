import { model, Schema, SchemaOptions, Model } from 'mongoose'
import { IEnrollmentProcessDocument, Step } from './enrollment-process.interface';

const options: SchemaOptions = {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false
}


const step = {
    /*
        0 -> Depto. Recursos financieros
        1 -> Depto. Servicios escolares
        2-> Depto. División de Estudios Profesionales
    */
    _id: false,
    step: { type: Number, enum: [1, 2, 3, 4] },
    deparment: { type: Number, enum: [0, 1] },
    isComplete: { type: Boolean, default: false },
}

const EnrollmentProcessSchema: Schema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'user', required: true, unique: true },
    steps: [
        {
            ...step,
            documents: { _type: { type: Number, enum: [0, 1, 2, 3, 4, 5, 6, 7] }, file: String }
        },
        {
            ...step,
            /*
                0-> Acuerdo entre partes
                1-> Solicitud de inscripcion
                2-> Certificado de bachillerato
                3-> Acta de nacimiento
                4-> CURP
                5-> Certificado medico
                6-> Comporbante de NSS
                7-> Recibo de pago
                8-> Boucher
            */
            documents: [{
                _type: { type: Number, enum: [0, 1, 2, 3, 4, 5, 6, 7] },
                file: { type: String }
            }]
        },
        {
            ...step
        },
        {
            ...step,
            documents: { _type: { type: Number, enum: [0, 1, 2, 3, 4, 5, 6, 7] }, file: String }

        }

    ]

}, options)


class EnrollmentProcess {
    steps: Step[]

    get isComplete() {
        return this.steps.filter(s => s.isComplete).length === 4
    }

}
EnrollmentProcessSchema.loadClass(EnrollmentProcess)



export default model<IEnrollmentProcessDocument>('enrollmentprocess', EnrollmentProcessSchema)