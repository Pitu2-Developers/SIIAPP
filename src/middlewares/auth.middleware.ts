import { Context } from "koa";
import { SecurityService } from '../security'

const { decodeToken } = new SecurityService()

export function isAuth(ctx: Context, next: Function) {


}