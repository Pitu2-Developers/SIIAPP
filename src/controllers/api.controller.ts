import { Context } from 'koa'
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { AppHelpers } from '../helpers/app.helpers';
import { SubjectController } from './subject.controller';
import { GroupController } from './group.controller';

import { UserController } from './user.controller';
import { SubjectInfoController } from './subject-info.controller';
import { EnrollmentProcessController } from './enrollment-process.controller';
import { SchoolYearController } from './school-years.controller';
import { FinancialController } from './financial.controller';



@autobind
class ApiController {
    //INJECT CONTROLLERS  
    @Inject public studentCtrl: StudentController
    @Inject public teacherCtrl: TeacherController
    @Inject public subjectCtrl: SubjectController
    @Inject public groupCtrl: GroupController
    @Inject public userCtrl: UserController
    @Inject public subjectInfoCtrl: SubjectInfoController
    @Inject public enrollmentProcessCtrl: EnrollmentProcessController
    @Inject public schoolYearCtrl: SchoolYearController
    @Inject public financialCtrl: FinancialController
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




}


export default Container.get(ApiController) as ApiController