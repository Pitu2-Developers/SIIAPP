import ApiRouter from './api.routes'
import AuthRouter from './auth.routes'
import * as KoaRouter from 'koa-router'

const routers: any[] = [
    ApiRouter,
    AuthRouter
]


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





export default new Router(routers)
