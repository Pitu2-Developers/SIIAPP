import autobind from "autobind-decorator";
import { Context } from "koa";
import { handleError } from "../utils";
import { Inject } from "typescript-ioc";
import { SchoolYearHelpers } from "../helpers/school-year.helpers";
import { ISchoolYearModel } from "../models/school-year/school-year.interface";
import { HTTP_201_CREATED } from ".";



@autobind
export class SchoolYearController {

    @Inject private _: SchoolYearHelpers


    async create(ctx: Context) {
        const data: ISchoolYearModel = ctx.request.body as ISchoolYearModel
        try {
            await this._.create(data)
            ctx.status = HTTP_201_CREATED
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

}