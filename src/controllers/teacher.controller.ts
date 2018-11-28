import { Context } from "koa";
import { Inject } from "typescript-ioc";
// import { SecurityService } from "../security";
import autobind from "autobind-decorator";
import TeacherHelpers from "../helpers/teacher.helpers";
import { ITeacherModel } from "../models/teacher/teacher.interface";
import { IUserModel } from "../models/user/user.interface";
import { handleError } from "../utils";
import { ID } from "../types";
import { HTTP_204_NO_CONTENT, HTTP_201_CREATED } from ".";


@autobind
export class TeacherController {
    @Inject private _: TeacherHelpers

    constructor() { }

    async create(ctx: Context) {
        const data: ITeacherModel = ctx.request.body as ITeacherModel
        try {
            await this._.create(data)
            ctx.status = HTTP_201_CREATED
        } catch (error) {
            const status = error.status || 500
            ctx.status = status
            ctx.body = error
        }
    }

    async remove(ctx: Context) {
        const _id: ID = ctx.params._id
        try {
            // console.log("AQUI");
            await this._.delete(_id)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            // console.log(error);
            const { status, message } = handleError(error)
            // console.log(message);

            ctx.status = status

            ctx.body = message


        }
    }

    async update(ctx: Context) {
        const data: Partial<ITeacherModel> = ctx.request.body,
            _id: ID = ctx.params._id
        // console.log(data);

        try {
            await this._.update(_id, data)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            // console.log(message);

            ctx.status = status

            ctx.body = message

        }

    }
}