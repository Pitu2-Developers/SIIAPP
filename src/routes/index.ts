import ApiRouter from './api-routes'
import * as KoaRouter from 'koa-router'


class Router extends KoaRouter {
    constructor(routers: KoaRouter[]) {
        super()
        this.init(routers)
    }
    private addRouter(router: KoaRouter): void {
        this.use(router.routes())
        this.use(router.allowedMethods())
    }
    private init(routers: KoaRouter[]): void {
        routers.forEach(router => this.addRouter(router))
    }

}


const routers: any[] = [
    ApiRouter
]


export default new Router(routers)
