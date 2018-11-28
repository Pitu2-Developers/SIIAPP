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


    async remove(_id: ID): Promise<any> {

        const tasks: Function[] = [
            async (done: Function) => {
                try {
                    const doc = await Student.findOne({ _id })
                    if (!doc)
                        done({ message: `Student doesn't exist`, status: 404 })
                    else {
                        console.log(doc);

                        doc.remove()
                        done(null, doc._id)

                    }

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


    create(data: IStudentModel): Promise<ID> {
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

                if (errors) reject(errors)
                resolve(response)
            })
        })




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

    }


}



