import { Context } from "koa";
import { StudentHelpers } from "../helpers/student.helper";
import { SecurityService } from "../security";
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { IStudentModel, IStudentDocument } from "../models/student/student.interface";
import { UserHelpers } from '../helpers/user.helper'
import { AuthResponse, Credentials } from "../types";

class AuthController {
    @Inject private helpers: StudentHelpers;
    @Inject private userHelpers: UserHelpers;
    @Inject private securityService: SecurityService;

    constructor() {


    }

    ///
    @autobind
    public async signIn(ctx: Context) {
        const authResponse: AuthResponse = await this.userHelpers.authenticate(ctx.request.body as Credentials);
        ctx.body = authResponse;
    }

    ///
    @autobind
    public async signUp(ctx: Context) {
        try {


            const data: IStudentModel = ctx.request.body as IStudentModel;

            const user: IStudentDocument = await this.helpers.createStudent(data);
            ctx.body = this.securityService.generateToken(user._id);

        } catch (error) {
            console.log(error);
            ctx.throw(500);
        }
    }
}


//
export default Container.get(AuthController) as AuthController

