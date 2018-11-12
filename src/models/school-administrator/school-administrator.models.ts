import { Schema, SchemaOptions, model } from 'mongoose'


const options: SchemaOptions = {
    timestamps: true,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}


const SchoolAdministratorSchema: Schema = new Schema({



})