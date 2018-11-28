import autobind from "autobind-decorator";
import { Context } from "koa";
import { handleError } from "../utils";
import { Inject } from "typescript-ioc";
import { EnrollmentProcessHelpers } from "../helpers/enrollment-process.helpers";
import { Step } from "../models/enrollment-process/enrollment-process.interface";
import { HTTP_204_NO_CONTENT } from ".";


@autobind
export class EnrollmentProcessController {
    @Inject private _: EnrollmentProcessHelpers


    async updateStep(ctx: Context) {
        const data = ctx.request.body as Step
        try {

            console.log(data);
            console.log(ctx.state);


            await this._.updateStep(ctx.state.sub, data.step, data)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }


}