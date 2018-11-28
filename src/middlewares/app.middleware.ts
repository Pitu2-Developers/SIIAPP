import { Context } from "koa";
import { AppConfig } from "../types";
import { AppHelpers } from "../helpers/app.helpers";
// const cfg: AppConfig = require('../config.json')
const { getAppConfig } = new AppHelpers()

export async function isEnrollment(ctx: Context, next: Function) {
    const cfg = getAppConfig()
    console.log(cfg);

    if (cfg.enrollmentMode)
        await next()
    else {
        ctx.status = 401
        ctx.body = `Today isn't enrollment day.`
    }

}