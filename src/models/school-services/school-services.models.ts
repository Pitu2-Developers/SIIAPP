import { Schema, SchemaOptions, model } from 'mongoose'
import { ISchoolServicesModel, ISchoolServicesDocument } from './school-services.interface';


const options: SchemaOptions = {
    timestamps: true,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}


const SchoolServicesSchema: Schema = new Schema({



}, options)


export default model<ISchoolServicesDocument>('schoolservices', SchoolServicesSchema)