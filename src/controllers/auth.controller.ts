import { Context } from "koa";
import { StudentHelpers } from "../helpers/student.helpers";
import { SecurityService } from "../security";
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { IStudentModel, IStudentDocument } from "../models/student/student.interface";
import { UserHelpers } from '../helpers/user.helpers'
import { AuthResponse, Credentials, ID } from "../types";
import { handleError } from "../utils";
import { HTTP_201_CREATED, HTTP_204_NO_CONTENT } from ".";



@autobind
class AuthController {
    @Inject private helpers: StudentHelpers;
    @Inject private userHelpers: UserHelpers;
    // @Inject private securityService: SecurityService;

    constructor() {


    }

    ///
    async signIn(ctx: Context) {
        try {
            const data: Credentials = ctx.request.body as Credentials
            const authResponse: AuthResponse = await this.userHelpers.authenticate(data);

            ctx.body = authResponse;

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
            console.log(error);

            // const status = error.status || 500
            // ctx.status = status
            // // ctx.throw(status)
            // ctx.body = error
        }
    }

    async signUp(ctx: Context) {
        try {


            const data: IStudentModel = ctx.request.body as IStudentModel;

            await this.helpers.create(data);

            ctx.status = HTTP_201_CREATED
        } catch (error) {


            const { status, message } = handleError(error)

            ctx.status = status
            ctx.body = message
        }
    }

    async logout(ctx: Context) {

        try {
            const _id: ID = ctx.state.sub

            this.userHelpers.logout(_id)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }
}


//
export default Container.get(AuthController) as AuthController

