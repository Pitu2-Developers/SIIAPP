import autobind from "autobind-decorator";
import { EntityController } from "./enitity-base.controller";
import { Context } from "koa";
import { handleError } from "../utils";
import { Inject } from "typescript-ioc";
import { FinancialHelpers } from "../helpers/financial.helpers";
import { IFinancialModel } from "../models/financial/financial.interface";
import { HTTP_201_CREATED, HTTP_204_NO_CONTENT } from ".";
import { ID } from "../types";
import { Part } from "formidable";



@autobind
export class FinancialController implements EntityController {
    @Inject private _: FinancialHelpers

    async create(ctx: Context) {
        const data: IFinancialModel = ctx.request.body as IFinancialModel
        try {
            await this._.create(data)
            ctx.status = HTTP_201_CREATED

        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }
    async update(ctx: Context) {
        const _id: ID = ctx.params._id,
            data: Partial<IFinancialModel> = ctx.request.body
        try {
            await this._.update(_id, data)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }
    async remove(ctx: Context) {
        const _id: ID = ctx.params._id

        try {
            await this._.remove(_id)
            ctx.status = HTTP_204_NO_CONTENT
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

}