import Student from '../models/student/student.model'
import { IStudentModel, IStudentDocument } from '../models/student/student.interface';
import { ID } from '../types';
import { checkEmailExists } from '../utils';
import { waterfall } from 'async'
import { Inject } from 'typescript-ioc';
import { StudentUtils } from '../utils/student.utils';


export class StudentHelpers {
    @Inject private _utils: StudentUtils
    constructor() { }


    getAll(): Promise<IStudentDocument[]> {
        return Student.find().then((res: IStudentDocument[]) => res)
    }


    async delete(_id: ID): Promise<any> {

        const tasks: Function[] = [
            async (done: Function) => {
                try {
                    return await Student.findByIdAndRemove({ _id })
                        .then(res => res ? done(null, _id) : done({ message: `Student doesn't exist`, status: 401 }))

                } catch (error) {
                    done({ message: 'Server error :(', status: 500 })
                }
            },
            async (_id: ID, done: Function) => {
                try {
                    // await $deleteStudent(_id)
                    await this._utils.$delete(_id)
                    done()
                } catch (error) {
                    console.log(error);

                    done(error)
                }

            }
        ]

        return new Promise((resolve, reject) => {
            waterfall(tasks, (errors, response) => {
                if (errors)
                    reject(errors)
                resolve()
            })


        })


    }



    private async _remove(_id: ID): Promise<boolean> {
        try {
            return await Student.findByIdAndRemove({ _id })
                .then(res => res ? true : false)

        } catch (error) {
            throw { message: 'Server error :(', status: 500 }
        }


    }


    createStudent(data: IStudentModel): Promise<ID> {
        // const student=new 'User'()
        const tasks: Function[] = [
            async (done: Function) => {
                if (!(await checkEmailExists(data.email)))
                    await new Student(data).save().then(res => done(null, res))
                else
                    done({ message: `${data.email} already exists`, status: 401 }, null)
            },
            async (data: IStudentDocument, done: Function) => {
                try {
                    await this._utils.$create(data)
                    done(null, data._id)
                } catch (error) {
                    await this._remove(data._id)
                    done(error)
                }
            }
        ]

        return new Promise((resolve, reject) => {
            waterfall(tasks, (errors, response: ID) => {
                // console.log(errors);
                // console.log(response);


                if (errors) reject(errors)
                resolve(response)
            })
        })

        // waterfall(tasks,(err,response)=> err?)

        // if (!(await checkEmailExists(data.email)))
        //     return new Student(data).save()
        // throw { message: `${data.email} already exists`, status: 401 }



    }

    async update(_id: ID, data: Partial<IStudentModel>) {

        const tasks: Function[] = [
            async (done: Function) => {
                const error = { message: `Student doesn't exist`, status: 418 }
                await Student.findByIdAndUpdate({ _id }, data).then(res => res ? done(null, _id) : done(error))
            },
            async (_id: ID, done: Function) => {
                try {
                    await this._utils.$update(_id, data)
                    done()
                } catch (error) {
                    done(error)
                }
            }
        ]

        return new Promise((resolve, reject) => {
            waterfall(tasks, (errors, response) => {
                if (errors) reject(errors)
                resolve()
            })


        })

        // try {
        //     const res = await Student.findByIdAndUpdate({ _id }, data)
        //     if (!res) throw { status: 418, message: `Student doesn't exist.` }

        // } catch (error) {
        //     throw error
        // }
    }
}



