import autobind from "autobind-decorator";
import { Context } from "koa";
import { handleError } from "../utils";
import { UserHelpers } from "../helpers/user.helpers";
import { Inject } from "typescript-ioc";
import { HTTP_200_OK, HTTP_204_NO_CONTENT } from ".";



@autobind
export class UserController {
    @Inject private _: UserHelpers
    async setBlock(ctx: Context) {

        try {
            console.log(ctx.params, ctx.request.body);

            await this._.block(ctx.params._id, ctx.request.body.isBlocked)
            ctx.status = HTTP_204_NO_CONTENT

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async getById(ctx: Context) {

        try {
            ctx.status = HTTP_200_OK
            ctx.body = await this._.findByID(ctx.params._id)
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async getByName(ctx: Context) {
        try {
            ctx.status = HTTP_200_OK
            ctx.body = await this._.findByName(ctx.params.search)
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async remove(ctx: Context) {
        try {
            await this._.remove(ctx.params._id)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

}