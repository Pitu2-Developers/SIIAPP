import { Credentials, IUser, AuthResponse } from "../types";
import User from '../models/user/user.model'
import { Inject } from "typescript-ioc";
import { SecurityService } from "../security";


export class UserHelpers {
    @Inject private securityService: SecurityService

    constructor() { }



    public async authenticate({ email, password }: Credentials): Promise<AuthResponse> {
        try {
            const user: IUser = await User.findOne({ email }).then((res: IUser) => res);

            if (!user) throw `${email} doesn't exist.`;
            else if (!user.comparePassword(password)) throw `The password is incorrect.`;
            else {
                //SET PASSWORD UNDEFINED
                user.set('password', undefined, { strict: false });

                return { user, token: this.securityService.generateToken(user._id) };

            }

        } catch (error) {

        }



    }


}

// export default 
