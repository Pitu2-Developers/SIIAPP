import Financial from '../models/financial/financial.models'
import { IFinancialModel, IFinancialDocument } from '../models/financial/financial.interface';
import { ID } from '../types';
import { handleError } from '../utils';


export class FinancialHelpers {

    create(data: IFinancialModel): Promise<IFinancialDocument> {
        try {
            return new Financial(data).save()
        } catch (error) {
            console.log(error);
            throw { message: 'Something went wrong', status: 500 }
        }
    }

    async remove(_id: ID): Promise<void> {
        try {
            const doc = await Financial.findByIdAndRemove({ _id })

            if (!doc) throw { message: 'Financial user does not exist', status: 404 }
        } catch (error) {
            throw handleError(error)
        }
    }

    async update(_id: ID, data: Partial<IFinancialModel>): Promise<void> {
        try {
            const doc = await Financial.findByIdAndUpdate({ _id }, data)
            if (!doc) throw { message: 'Financial user does not exist', status: 404 }

        } catch (error) {
            throw handleError(error)
        }

    }


}