import autobind from "autobind-decorator";
import { Context } from "koa";
import { handleError } from "../utils";
import { Container, Inject } from "typescript-ioc";
import { AdminHelpers } from "../helpers/admin.helpers";
import { IAdminModel } from "../models/admin/admin.interface";


@autobind
export class AdminController {
    @Inject private _: AdminHelpers

    async signUp(ctx: Context) {

        try {
            const data: IAdminModel = ctx.request.body
            console.log(data);
            await this._.createAdmin(data)
            ctx.status = 200
            // ctx.body = "OK"
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message

        }

    }


}

export default Container.get(AdminController) as AdminController