import { ISubjectHistoryModel } from "../models/subject-history/subject-history.interface";
import SubjectHistory from '../models/subject-history/subject-history.model'
import { ID } from "../types";


export class SubjectHistoryHelpers {

    create(data: ISubjectHistoryModel) {
        return new SubjectHistory(data).save()
    }
    async remove(_id: ID) {
        try {
            const doc = await SubjectHistory.findByIdAndRemove({ _id })
            if (!doc) throw { message: 'Not found', status: 404 }
        } catch (error) {
            console.log(error);

            throw { message: 'Server error', status: 500 }
        }
    }
} 