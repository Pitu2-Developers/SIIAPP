// This is required for socket-controllers
// import 'reflect-metadata'

import * as Koa from 'koa'
import KoaBodyParser = require("koa-body");
import { PORT } from './config'
import router from './routes'
const KoaStatic = require('koa-static')
import * as path from 'path'
// import './websockets/index.controller'
// import { createSocketServer } from 'socket-controllers'
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
        // console.log(process.env.NODE_ENV);

        // this.configSocketIO()
        // CON7001FIG KOA APP  / MIDDLEWARES
        this.setConfig()
        // INIT KOA ROUTER 
        this.initRouter()
    }

    // private configSocketIO() {
    //     if (process.env.NODE_ENV != 'test')
    //         createSocketServer(7001)
    // }

    //SET PLUGINS (MIDDLEWARES)
    private setConfig(): void {
        //BODY PARSER MIDDLEWARE 
        this.app.use(KoaBodyParser({
            multipart: true
        }))
        //cors
        this.app.use(cors())
        //logger
        this.app.use(logger())
        //Helmet
        this.app.use(helmet())
        //static
        this.app.use(KoaStatic(path.resolve(__dirname, '..', 'public')))
        // console.log(path.resolve(__dirname, '..', 'public', 'index.html'));
        // console.log(__dirname);


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