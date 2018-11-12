import { ISubjectModel, ISubjectDocument } from "../models/subject/subject.interface";
import Subject from '../models/subject/subject.model'
import { ID } from "../types";

export class SubjectHelpers {

    constructor() { }


    async  create(data: ISubjectModel): Promise<ISubjectDocument> {

        const subject: ISubjectDocument = await new Subject(data).save()

        return subject
    }

    async delete(_id: ID) {
        try {

        } catch (error) {

        }

    }

    async update(_id: ID, data: Partial<ISubjectModel>) {
        try {

        } catch (error) {

        }
    }




}