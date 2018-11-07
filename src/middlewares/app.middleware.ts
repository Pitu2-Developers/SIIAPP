import { Context } from "koa";
import { AppConfig } from "../types";
const cfg: AppConfig = require('../config.json')


export async function isEnrollment(ctx: Context, next: Function) {
    console.log(cfg);

    if (cfg.enrollment)
        await next()
    else {
        ctx.status = 401
        ctx.body = `Today isn't enrollment day.`
    }

}