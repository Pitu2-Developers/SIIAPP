import { Context, } from 'koa'

const VUE_URL_APP: string = "http://localhost:8080"


export const cors = async (ctx: Context, next: Function) => {
    ctx.set('Access-Control-Allow-Origin', VUE_URL_APP);
    ctx.set('Access-Control-Allow-Credentials', "true");
    ctx.set('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
};