import { IGroupModel, IGroupDocument } from "../models/group/group.interface";
import Group from '../models/group/group.model'
import { ID } from "../types";

export class GroupHelpers {


    createGroup(data: IGroupModel): Promise<IGroupDocument> {
        return new Group(data).save()
    }

    async deleteGroup(_id: ID): Promise<void> {

        try {
            const res = await Group.findByIdAndRemove({ _id })
            if (!res) throw { status: 418, message: `Group doesn't exist.` }
        } catch (error) {

            throw error
        }
    }




}