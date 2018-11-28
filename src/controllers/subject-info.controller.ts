import autobind from "autobind-decorator";
import { Inject } from "typescript-ioc";
import { SubjectInfoHelpers } from "../helpers/subject-info.helpers";
import { Context } from "koa";
import { handleError } from "../utils";
import { ISubjectInfoModel } from "../models/subject-info/subject-info.interface";
import { ID } from "../types";
import { HTTP_204_NO_CONTENT } from ".";



@autobind
export class SubjectInfoController {
    @Inject private _: SubjectInfoHelpers

    async create(ctx: Context) {
        try {
            const data: ISubjectInfoModel = ctx.request.body
            ctx.body = (await this._.create(data))._id

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }
    async delete(ctx: Context) {
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
    async update(ctx: Context) {

    }
}