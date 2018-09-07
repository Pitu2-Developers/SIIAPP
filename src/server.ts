import * as Koa from 'koa'
// import {Options} from 'koa-bodyparser'
// import * as KoaRouter from 'koa-router'
import KoaBodyParser = require("koa-bodyparser");

import { PORT } from './config'
import router from './routes'




class Server {
    private port: number
    readonly app: Koa

    constructor(port: number) {
        // super()
        this.app = new Koa()

        this.port = port
        this.setConfig()
        this.initRouter()
    }

    //SET PLUGINS (MIDDLEWARES)
    private setConfig(): void {
        //BODY PARSER MIDDLEWARE 
        this.app.use(KoaBodyParser())

    }

    //INIT ROUTER 
    private initRouter(): void {
        this.app.use(router.routes())
    }

    //GET APP
    public getApp(): Koa {
        return this.app
    }

    //RUN APP 
    public run(): void {
        this.app.listen(this.port)
    }

}


export default new Server(PORT)