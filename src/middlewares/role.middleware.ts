import { Context } from "koa";
import { handleError } from "../utils";


export async function isAdmin(ctx: Context, next: Function) {

    try {
        if (ctx.state.role === 'admin')
            await next()
        else
            throw { message: `You're not authorized >:`, status: 401 }
    } catch (error) {
        const { status, message } = handleError(error)
        ctx.status = status
        ctx.body = message
    }


}

export async function isStudent(ctx: Context, next: Function) {

    try {
        if (ctx.state.role === 'student')
            await next()
        else
            throw { message: `You're not authorized >:`, status: 401 }
    } catch (error) {
        const { status, message } = handleError(error)
        ctx.status = status
        ctx.body = message
    }


}