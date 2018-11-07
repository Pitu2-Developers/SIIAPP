import Admin from '../models/admin/admin.model'
import { IAdminModel } from '../models/admin/admin.interface';
import {checkEmailExists} from '../utils/'


export class AdminHelpers {
    

    async createAdmin(data: IAdminModel) {
        if(await checkEmailExists(data.email)){
            
        }
        return new Admin(data).save()
    }



}