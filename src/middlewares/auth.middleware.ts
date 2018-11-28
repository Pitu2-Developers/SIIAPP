import { Context } from "koa";
import { SecurityService } from '../security'
import { TokenDecodedPayload } from "../types";
import { handleError } from "../utils";



const { decodeToken } = new SecurityService()

/*
    0 -> All
    1 -> Admin
    2 -> Students
    3 -> teachers

*/





export async function isAuth(ctx: Context, next: Function) {
    const auth = ctx.request.headers.authorization
    let token = ''
    if (auth)
        token = auth.split(' ')[1]

    try {
        const { sub, role }: TokenDecodedPayload = await decodeToken(token)
        ctx.state = { sub, role }
        await next()
    } catch (error) {
        const { status, message } = handleError(error)
        ctx.status = status
        ctx.body = message
    }

}