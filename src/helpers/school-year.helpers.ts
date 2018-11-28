import SchoolYear from '../models/school-year/school-year.model'
import { ID } from "../types";
import { ISchoolYearModel } from "../models/school-year/school-year.interface";

export class SchoolYearHelpers {

    create(data: ISchoolYearModel) {
        return new SchoolYear(data).save()
    }

    async remove(_id: ID) {
        try {
            const doc = await SchoolYear.findByIdAndRemove({ _id })
            if (!doc) throw { message: 'Not found', status: 404 }

        } catch (error) {
            throw { message: 'Something went wrong', status: 500 }
        }
    }



}