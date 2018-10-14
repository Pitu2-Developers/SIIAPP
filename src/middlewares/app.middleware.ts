import { Context } from "koa";
import { AppConfig } from "../types";
const cfg: AppConfig = require('../config.json')


export async function isEnrollment(ctx: Context, next: Function) {
    if (cfg.enrollment)
        await next()
    else {
        ctx.status = 401
        // throw { status: 401, message: `Today isn't enrollment day.` }
        ctx.body = `Today isn't enrollment day.`
    }

}