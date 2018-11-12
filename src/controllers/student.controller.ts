import { Context } from "koa";
import autobind from "autobind-decorator";
import { Inject } from "typescript-ioc";
import { StudentHelpers } from "../helpers/student.helper";
import { IStudentModel } from "../models/student/student.interface";
import { handleError } from "../utils";
import { ID } from "../types";




@autobind
export class StudentController {
    // INJECT HELPERS
    @Inject private _: StudentHelpers

    // get all students

    async getAll(ctx: Context) {
        try {
            ctx.body = await this._.getAll()

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }

    }

    async update(ctx: Context) {
        const _id: ID = ctx.params._id
        try {

            await this._.update(_id, ctx.request.body)
            ctx.status = 200
        } catch (error) {
            const { status, message } = handleError(error);
            ctx.status = status;
            ctx.body = message;
        }

    }

    async delete(ctx: Context) {
        const _id: string = ctx.params._id
        try {

            await this._.delete(_id)
            ctx.status = 200
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }



    }



}