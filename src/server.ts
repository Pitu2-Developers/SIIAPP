import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'
import { PORT } from './config'
import router from './routes'




class Server extends Koa {
    private port: number

    constructor(port: number) {
        super()
        this.port = port
        this.initRouter()
    }

    private setConfig(): void {

    }

    private initRouter(): void {
        this.use(router.routes())
    }

    public getApp(): Koa {
        return this
    }

    public run(): void {
        this.listen(this.port)
        console.log(`App is running on port ${this.port} `);
    }

}


export default new Server(PORT)