// This is required for socket-controllers
import 'reflect-metadata'
import * as Koa from 'koa'
import KoaBodyParser = require("koa-bodyparser");
import { PORT } from './config'
import router from './routes'
import './websockets/notification.controller'
import { createSocketServer } from 'socket-controllers'
/* import { cors } from './middlewares/cors.middleware' */
const cors = require('@koa/cors')
//Helmet
const helmet = require('koa-helmet')

//Logger
const logger = require('koa-logger')


class App {
    private port: number
    readonly app: Koa

    constructor(port: number) {
        this.app = new Koa()

        this.port = port
        //INIT SOCKET.IO
        // this.configSocketIO()
        // CONFIG KOA APP  / MIDDLEWARES
        this.setConfig()
        // INIT KOA ROUTER 
        this.initRouter()
    }

    private configSocketIO() {
        createSocketServer(7001)
    }

    //SET PLUGINS (MIDDLEWARES)
    private setConfig(): void {
        //BODY PARSER MIDDLEWARE 
        this.app.use(KoaBodyParser())
        //cors
        this.app.use(cors())
        //logger
        this.app.use(logger())
        //Helmet
        this.app.use(helmet())
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
        this.app.listen(this.port, '0.0.0.0')
    }

}


export default new App(PORT)