import autobind from "autobind-decorator";
import { Context } from "koa";
import { Inject } from "typescript-ioc";
import { SubjectHelpers } from "../helpers/subject.helpers";
import { ISubjectModel } from "../models/subject/subject.interface";
import { handleError } from "../utils";
import { HTTP_201_CREATED, HTTP_204_NO_CONTENT } from ".";



@autobind
export class SubjectController {

    @Inject private _: SubjectHelpers


    async create(ctx: Context) {
        try {
            const data: ISubjectModel = ctx.request.body as ISubjectModel
            console.log(data);
            await this._.create(data)
            ctx.status = HTTP_201_CREATED
            // ctx.body = 'OK'
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
            // throw error
        }
    }

    async delete(ctx: Context) {
        const _id: string = ctx.params._id
        try {
            await this._.delete(_id)
            ctx.status = HTTP_204_NO_CONTENT;

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }

    }
    async update(ctx: Context) {
        const _id: string = ctx.params._id
        try {
            await this._.update(_id, ctx.request.body)
            ctx.status = HTTP_204_NO_CONTENT;

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }

    }


}
