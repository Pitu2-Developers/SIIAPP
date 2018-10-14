import { Credentials, IUser, AuthResponse, AppConfig } from "../types";
import User from '../models/user/user.model'
import { Inject } from "typescript-ioc";
import { SecurityService } from "../security";
import { IUserDocument } from "../models/user/user.interface";
import { IStudentDocument } from "../models/student/student.interface";
import { getCareer } from "../utils";
const cfg: AppConfig = require('../config.json')


export class UserHelpers {
    @Inject private securityService: SecurityService

    constructor() { }




    async authenticate({ email, password }: Credentials): Promise<AuthResponse> {
        try {
            let user: IUser = await User.findOne({ email }).then((res: IUser) => res);
            // user.career
            if (!user) throw `${email} doesn't exist.`;
            else if (!user.comparePassword(password)) throw `The password is incorrect.`;
            else {
                //SET PASSWORD UNDEFINED
                user.set('password', undefined, { strict: false });
                console.log(cfg);


                // Check 
                if (user.role === 'student' && cfg.timetableSelection.isActive) {
                    if (cfg.timetableSelection.carrer === user.career)
                        return { user, token: this.securityService.generateToken(user._id) };
                    else
                        throw `Sorry :( ,You cannot login in this moment (The platform is only available for ${getCareer(cfg.timetableSelection.carrer).toUpperCase()}).`
                }

                return { user, token: this.securityService.generateToken(user._id) };




            }

        } catch (error) {
            throw error
        }



    }


}

// export default 
