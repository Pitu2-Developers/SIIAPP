import { IGroupModel, IGroupDocument } from "../models/group/group.interface";
import Group from '../models/group/group.model'
import { ID } from "../types";

export class GroupHelpers {


    create(data: IGroupModel): Promise<IGroupDocument> {
        return new Group(data).save()
    }

    async addSubject(_id: ID, subjectID: ID) {
        try {
            const res = await Group.findByIdAndUpdate({ _id }, { $push: { subjects: subjectID } }, { new: true })
            console.log(res);

        } catch (error) {
            throw { message: 'Server error', status: 500 }
        }
    }

    async remove(_id: ID): Promise<void> {

        try {
            const res = await Group.findByIdAndRemove({ _id })
            if (!res) throw { status: 418, message: `Group doesn't exist.` }
        } catch (error) {

            throw error
        }
    }




}