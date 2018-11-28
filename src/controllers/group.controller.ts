import autobind from "autobind-decorator";

import { Inject } from "typescript-ioc";
import { GroupHelpers } from "../helpers/group.helpers";
import { handleError } from "../utils";
import { Context } from "koa";
import { IGroupModel } from "../models/group/group.interface";
import { ID } from "../types";
import { HTTP_201_CREATED, HTTP_204_NO_CONTENT } from ".";



@autobind
export class GroupController {

    @Inject private _: GroupHelpers

    async create(ctx: Context) {
        const data: IGroupModel = ctx.request.body as IGroupModel

        try {
            await this._.create(data)
            ctx.status = HTTP_201_CREATED
        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async remove(ctx: Context) {
        const _id: ID = ctx.params._id
        try {
            await this._.remove(_id)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async add(ctx: Context) {
        const _id: ID = ctx.params._id,
            subjectId: ID = ctx.request.body._id

        try {
            await this._.addSubject(_id, subjectId)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

}