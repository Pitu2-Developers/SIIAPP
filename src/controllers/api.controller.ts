import { Context } from 'koa'
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import * as fs from 'fs';
import { AppHelpers } from '../helpers/app.helpers';
import { AppConfig } from '../types';



@autobind
class ApiController {
    //INJECT CONTROLLERS  
    @Inject public studentCtrl: StudentController
    @Inject public teacherCtrl: TeacherController
    //INJECT HELPERS
    @Inject private appHelpers: AppHelpers



    constructor() { }

    async getAppConfig(ctx: Context) {
        try {

            ctx.body = this.appHelpers.getAppConfig()
        } catch (error) {
            const status = error.status || 500
            ctx.status = status;
            ctx.body = error
        }
    }

    async configureApp(ctx: Context) {
        try {
            this.appHelpers.updateAppConfig(ctx.request.body as AppConfig)
            ctx.body = "OK"
        } catch (error) {
            ctx.throw(500)
        }

    }


}


export default Container.get(ApiController) as ApiController