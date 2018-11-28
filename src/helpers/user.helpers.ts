import { Credentials, IUser, AuthResponse, AppConfig, ID } from "../types";
import User from '../models/user/user.model'
import { Inject } from "typescript-ioc";
import { SecurityService } from "../security";

import { getCareer } from "../utils";
import { AppHelpers } from "./app.helpers";


export class UserHelpers {
    @Inject private securityService: SecurityService
    @Inject private appHelpers: AppHelpers
    constructor() { }

    //PRIVATE
    private checkCareer(cfg: AppConfig, career: number): boolean {
        console.log(cfg);

        return cfg.timetableSelection.careers.filter(c => c.career === career).length > 0
    }

    private getCareers(cfg: AppConfig): string {
        // let 
        return cfg.timetableSelection.careers.map(c => getCareer(c.career).toUpperCase())
            .reduce((a, b) => `${a}, ${b}`, '')
    }


    //PUBLIC
    async remove(_id: ID) {
        try {
            const res = await User.findByIdAndRemove({ _id })
            console.log(res);

        } catch (error) {
            throw { status: 500, message: 'Something went wrong :(' }

        }
    }

    async block(_id: ID, isBlocked: boolean) {
        try {
            const res = await User.findByIdAndUpdate({ _id }, { $set: { isBlocked } })
            console.log(res);

        } catch (error) {
            throw { status: 500, message: 'Something went wrong :(' }

        }
    }

    async findByID(_id: ID) {
        try {
            return User.findById({ _id }).select('-password')
        } catch (error) {
            throw { status: 500, message: 'Something went wrong :(' }
        }
    }

    async findByName(firstName: string) {
        const regex: RegExp = new RegExp(`^${firstName}`);
        try {
            return User.find({ firstName: { $regex: regex, $options: 'i' } }).select('firstName lastName avatar fullname role career isStudent')
        } catch (error) {
            throw { status: 500, message: 'Something went wrong :(' }
        }
    }

    async logout(_id: ID) {
        try {
            await User.findByIdAndUpdate({ _id }, { $set: { isActive: false } })
        } catch (error) {
            console.log(error);

            throw { status: 500, message: 'Something went wrong :(' }
        }
    }

    async authenticate({ email, password }: Credentials): Promise<AuthResponse> {
        const cfg: AppConfig = this.appHelpers.getAppConfig()
        try {
            let user: IUser = await User.findOneAndUpdate({ email }, { $set: { isActive: true } }, { new: true }).then((res: IUser) => res);

            if (!user) throw { message: `${email} doesn't exist.`, status: 401 };
            else if (!user.comparePassword(password)) throw { message: `The password is incorrect.`, status: 401 };
            else if (!user.isBlocked) {
                //SET PASSWORD UNDEFINED
                user.set('password', undefined, { strict: false });
                user.set('isStudent', null, { strict: false });

                user.set('_isStudent', await user.isStudent ? true : false, { strict: false });

                console.log(await user.isStudent);

                // Check 
                if (user.role === 'student' && cfg.timetableSelection.isActive) {

                    if (this.checkCareer(cfg, user.career))
                        return { user, token: this.securityService.generateToken(user._id) };
                    else
                        throw { message: `You cannot login in this moment (The platform is only available for ${this.getCareers(cfg)} ).`, status: 401 }
                }

                return { user, token: this.securityService.generateToken({ sub: user._id, role: user.role }) };




            } else {
                throw { message: 'For some reasons your account is temporarily blocked', status: 418 }
            }

        } catch (error) {
            throw error
        }



    }



}

// export default 
