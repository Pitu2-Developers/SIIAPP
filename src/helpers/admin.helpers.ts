import Admin from '../models/admin/admin.model'
import User from '../models/user/user.model'
import { IAdminModel } from '../models/admin/admin.interface';
import { checkEmailExists } from '../utils/'


export class AdminHelpers {



    async createAdmin(data: IAdminModel) {
        if (!(await checkEmailExists(data.email)))
            return new Admin(data).save()
        throw { message: `${data.email} already exists`, status: 401 }

    }



}