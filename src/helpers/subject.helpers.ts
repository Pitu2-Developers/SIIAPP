import { ISubjectModel, ISubjectDocument } from "../models/subject/subject.interface";
import Subject from '../models/subject/subject.model'

export class SubjectHelpers {

    constructor() { }


    async  createSubject(data: ISubjectModel): Promise<ISubjectDocument> {

        const subject: ISubjectDocument = await new Subject(data).save()

        return subject
    }




}