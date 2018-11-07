import autobind from "autobind-decorator";

import { Inject } from "typescript-ioc";
import { GroupHelpers } from "../helpers/group.helpers";
import { handleError } from "../utils";
import { Context } from "koa";
import { IGroupModel } from "../models/group/group.interface";
import { ID } from "../types";



@autobind
export class GroupControllers {

    @Inject private _: GroupHelpers

    async createGroup(ctx: Context) {
        const data: IGroupModel = ctx.request.body as IGroupModel

        try {
            await this._.createGroup(data)
            ctx.status = 200
        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }
    async deleteGroup(ctx: Context) {
        const _id: ID = ctx.params._id
        try {
            await this._.deleteGroup(_id)
            ctx.status = 200
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

}