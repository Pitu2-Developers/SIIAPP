import { Context, } from 'koa'

export async function apiTestController(ctx: Context) {
    console.log("TEST CONTROLLER");
    console.log(ctx);
    ctx.body = { user: { firstName: 'AAA' } }

}