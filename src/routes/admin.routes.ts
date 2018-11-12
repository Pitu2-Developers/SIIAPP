import * as KoaRouter from 'koa-router'
import AdminController from '../controllers/admin.controller'


const router = new KoaRouter({ prefix: '/admin' })

router.post('/signup', AdminController.signUp)


export default router 