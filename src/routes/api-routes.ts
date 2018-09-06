import { apiTestController } from "../controllers/api-controllers";
import * as KoaRouter from 'koa-router'


const router = new KoaRouter({ prefix: '/api' })
router.get('/test', apiTestController)


export default router