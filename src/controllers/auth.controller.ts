import { Context, Request } from "koa";
import { UserHelpers } from "../helpers/user.helpers";
import { IUserDocument, IUserModel } from "../models/user/user.interface";
import { SecurityService } from "../security";
import { Container, Inject } from 'typescript-ioc'



class AuthController {
    @Inject private helpers: UserHelpers
    @Inject private securityService: SecurityService

    constructor() { }

    ///
    public async signIn(ctx: Context) {
        console.log(ctx.request.body);
        ctx.body = 'AUTH CONTROLLER'
    }

    ///
    public async signUp(ctx: Context) {
        try {
            const data: IUserModel = ctx.request.body as IUserModel

            const user: IUserDocument = await this.helpers.createUser(data)
            ctx.body = this.securityService.generateToken(user._id)
        } catch (error) {
            console.log(error);
            ctx.throw(500)
        }
    }
}


//
export default Container.get(AuthController) as AuthController

