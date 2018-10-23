import autobind from "autobind-decorator";
import { Context } from "koa";
import { Inject } from "typescript-ioc";
import { SubjectHelpers } from "../helpers/subject.helpers";
import { ISubjectModel } from "../models/subject/subject.interface";



@autobind
export class SubjectControllers {

    @Inject private _: SubjectHelpers


    async addSubject(ctx: Context) {
        try {
            const data: ISubjectModel = ctx.request.body as ISubjectModel
            console.log(data);

            await this._.createSubject(data)
            ctx.body = 'OK'
        } catch (error) {
            ctx.body = error
            // throw error
        }
    }

}
