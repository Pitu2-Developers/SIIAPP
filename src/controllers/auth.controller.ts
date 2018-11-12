import { Context } from "koa";
import { StudentHelpers } from "../helpers/student.helper";
import { SecurityService } from "../security";
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { IStudentModel, IStudentDocument } from "../models/student/student.interface";
import { UserHelpers } from '../helpers/user.helper'
import { AuthResponse, Credentials } from "../types";
import { handleError } from "../utils";



@autobind
class AuthController {
    @Inject private helpers: StudentHelpers;
    @Inject private userHelpers: UserHelpers;
    @Inject private securityService: SecurityService;

    constructor() {


    }

    ///
    async signIn(ctx: Context) {
        try {
            const data: Credentials = ctx.request.body as Credentials
            const authResponse: AuthResponse = await this.userHelpers.authenticate(data);
            ctx.body = authResponse;

        } catch (error) {

            console.log(error);

            const status = error.status || 500
            ctx.status = status
            // ctx.throw(status)
            ctx.body = error
        }
    }

    async signUp(ctx: Context) {
        try {


            const data: IStudentModel = ctx.request.body as IStudentModel;
            const user = await this.helpers.createStudent(data);
            console.log(data);

            ctx.body = this.securityService.generateToken(user);
            ctx.status = 200
        } catch (error) {
            // console.log("PITPOPPPPP");

            const { status, message } = handleError(error)

            ctx.status = status
            ctx.body = message
        }
    }
}


//
export default Container.get(AuthController) as AuthController

