import { Context } from 'koa'

export async function apiTestController(ctx: Context) {
    ctx.body = [1, 2, 3, 4]
}