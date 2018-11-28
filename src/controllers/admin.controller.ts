import autobind from "autobind-decorator";
import { Context } from "koa";
import { handleError } from "../utils";
import { Container, Inject } from "typescript-ioc";
import { AdminHelpers } from "../helpers/admin.helpers";
import { IAdminModel } from "../models/admin/admin.interface";
import { AppHelpers } from "../helpers/app.helpers";
import { AppConfig } from "../types";
import { UserHelpers } from "../helpers/user.helpers";
import { HTTP_204_NO_CONTENT, HTTP_200_OK, HTTP_201_CREATED } from ".";


@autobind
export class AdminController {
    @Inject private _: AdminHelpers
    @Inject private __: AppHelpers
    @Inject private userHelpers: UserHelpers



    async signUp(ctx: Context) {

        try {
            const data: IAdminModel = ctx.request.body
            console.log(data);
            await this._.createAdmin(data)
            ctx.status = HTTP_201_CREATED
            // ctx.body = "OK"
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message

        }

    }
    async getConfig(ctx: Context) {
        try {
            ctx.status = HTTP_200_OK
            ctx.body = this.__.getAppConfig()
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async configure(ctx: Context) {
        try {
            this.__.updateAppConfig(ctx.request.body as AppConfig)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }

    }


}

export default Container.get(AdminController) as AdminController