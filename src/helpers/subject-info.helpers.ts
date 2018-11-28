import SubjectInfo from '../models/subject-info/subject-info.model'
import { ISubjectInfoModel } from "../models/subject-info/subject-info.interface";
import { ID } from "../types";


export class SubjectInfoHelpers {

    create(data: ISubjectInfoModel) {
        return new SubjectInfo(data).save()
    }

    async remove(_id: ID) {
        try {
            const doc = await SubjectInfo.findByIdAndRemove({ _id })
            if (!doc) throw { message: 'Not found', status: 404 }

        } catch (error) {
            throw { message: 'Server error :(', status: 500 }
        }
    }
    update(_id: ID, data: Partial<ISubjectInfoModel>) {

    }

}