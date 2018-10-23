import autobind from "autobind-decorator";
import { IGroupModel, IGroupDocument } from "../models/group/group.interface";
import Group from '../models/group/group.model'


@autobind

export class GroupControllers {


    createGroup(data: IGroupModel) {
        const group: Promise<IGroupDocument> = new Group(data).save()
        return group
    }

}