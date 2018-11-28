import { IEnrollmentProcessModel, Step, IEnrollmentProcessDocument } from "../models/enrollment-process/enrollment-process.interface";
import EnrollmentProcess from '../models/enrollment-process/enrollment-process.model'
import { ID } from "../types";
import { handleError } from "../utils";



export class EnrollmentProcessHelpers {


    async getIsComplete(_user: ID): Promise<boolean> {
        try {
            return await EnrollmentProcess.findOne({ _user }).then((_doc: IEnrollmentProcessDocument) => _doc.isComplete)

        } catch (error) {
            console.log(error);
            throw { message: 'Server error', status: 500 }
        }
    }

    create(data: IEnrollmentProcessModel) {
        return new EnrollmentProcess(data).save()
    }


    async remove(_user: ID) {
        console.log("REMOVE ENROLLMENT CASCADE");

        try {
            const doc = await EnrollmentProcess.findOneAndRemove({ _user })
            if (!doc) throw { message: 'Not found', status: 404 }

        } catch (error) {
            throw handleError(error)
        }
    }


    async updateStep(_user: ID, i: number, step: Partial<Step>) {
        try {
            const doc = await EnrollmentProcess.findOneAndUpdate({ _user, "steps.step": i }, { $set: { 'steps.$': step } })
            if (!doc) throw { message: 'Not found ', status: 404 }

        } catch (error) {
            console.log(error);
            throw handleError(error)
        }
    }


}