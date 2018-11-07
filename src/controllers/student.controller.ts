import { Context } from "koa";
import autobind from "autobind-decorator";
import { Inject } from "typescript-ioc";
import { StudentHelpers } from "../helpers/student.helper";
import { IStudentModel } from "../models/student/student.interface";




@autobind
export class StudentController {
    // INJECT HELPERS
    @Inject private studentHelpers: StudentHelpers

    // get all students

    async getAllStudents(ctx: Context) {
        try {
            ctx.body = await this.studentHelpers.getStudents()

        } catch (error) {
            ctx.body = error
        }

    }

    async updateStudent(ctx: Context) {


    }



}