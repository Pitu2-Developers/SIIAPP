import { Context } from 'koa'
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator';

class ApiController {

    constructor() { }

    @autobind
    testing(ctx: Context) {
        ctx.body = "TEST CONTROLLER"
    }

}


export default Container.get(ApiController) as ApiController