import { Context } from "koa";
import { Inject } from "typescript-ioc";
// import { SecurityService } from "../security";
import autobind from "autobind-decorator";
import TeacherHelpers from "../helpers/teacher.helper";
import { ITeacherModel } from "../models/teacher/teacher.interface";


@autobind
export class TeacherController {
    @Inject private teacherHelpers: TeacherHelpers

    constructor() { }

    async createTeacher(ctx: Context) {
        const data: ITeacherModel = ctx.request.body as ITeacherModel
        try {
            await this.teacherHelpers.createTeacher(data)
            ctx.status = 200
        } catch (error) {
            const status = error.status || 500
            ctx.status = status
            ctx.body = error
        }
    }
}