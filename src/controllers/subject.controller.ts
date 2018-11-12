import autobind from "autobind-decorator";
import { Context } from "koa";
import { Inject } from "typescript-ioc";
import { SubjectHelpers } from "../helpers/subject.helpers";
import { ISubjectModel } from "../models/subject/subject.interface";
import { handleError } from "../utils";



@autobind
export class SubjectControllers {

    @Inject private _: SubjectHelpers


    async create(ctx: Context) {
        try {
            const data: ISubjectModel = ctx.request.body as ISubjectModel
            console.log(data);
            await this._.create(data)
            ctx.body = 'OK'
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
            ctx.status = 200;

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
            ctx.status = 200;

        } catch (error) {

        }

    }


}
