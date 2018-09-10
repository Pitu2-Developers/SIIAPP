import User from '../models/user/user.model'
import { genSaltSync, hashSync } from 'bcrypt';
import { SALT_FACTOR } from '../config';
import { IUserModel, IUserDocument } from '../models/user/user.interface';

export function hashPassword(password: string): string {
    const salt: string = genSaltSync(SALT_FACTOR)
    return hashSync(password, salt)
}


export class UserHelpers {
    constructor() { }

    public createUser(data: IUserModel): Promise<IUserDocument> {
        const user: IUserDocument = new User(data)
        return user.save().then((res: IUserDocument) => res)
    }
}




// USER UTILS
// export function hashPassword(password: string): string {
//     const salt: string = genSaltSync(SALT_FACTOR)
//     return hashSync(password, salt)
// }

//USER HELPERS
// export function createUser(data?: IUserModel): Promise<IUserDocument> {
//     const user: IUserDocument = new User(data)

//     return user.save().then((res: IUserDocument) => {
//         console.log(res);

//         return res
//     })
// }