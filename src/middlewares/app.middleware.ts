import { Context } from "koa";
import { AppConfig } from "../types";
const cfg: AppConfig = require('../config')


export function configCheck(ctx: Context, next: Function) {
    // if (cfg.timetableSelection.isActive)


}