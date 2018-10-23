import { Context } from "koa";
import { Inject } from "typescript-ioc";
// import { SecurityService } from "../security";
import autobind from "autobind-decorator";
import TeacherHelpers from "../helpers/teacher.helper";
import { ITeacherModel } from "../models/teacher/teacher.interface";
import { IUserModel } from "../models/user/user.interface";
import { handleError } from "../utils";
import { ID } from "../types";


@autobind
export class TeacherController {
    @Inject private _: TeacherHelpers

    constructor() { }

    async createTeacher(ctx: Context) {
        const data: ITeacherModel = ctx.request.body as ITeacherModel
        try {
            await this._.createTeacher(data)
            ctx.status = 200
        } catch (error) {
            const status = error.status || 500
            ctx.status = status
            ctx.body = error
        }
    }

    async deleteTeacher(ctx: Context) {
        const _id: ID = ctx.params._id
        try {
            // console.log("AQUI");
            await this._.deleteTeacher(_id)

            ctx.body = "OK"
            // console.log(isDeleted);
        } catch (error) {
            // console.log(error);
            const { status, message } = handleError(error)
            // console.log(message);

            ctx.status = status

            ctx.body = message


        }
    }

    async updateTeacher(ctx: Context) {
        const data: Partial<ITeacherModel> = ctx.request.body,
            _id: ID = ctx.params._id
        // console.log(data);

        try {
            await this._.updateTeacher(_id, data)
            ctx.status = 200
        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            // console.log(message);

            ctx.status = status

            ctx.body = message

        }

    }
}