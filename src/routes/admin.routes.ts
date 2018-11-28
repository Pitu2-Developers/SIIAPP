import * as KoaRouter from 'koa-router'
import AdminController from '../controllers/admin.controller'
import { isAuth } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/role.middleware';


const router = new KoaRouter({ prefix: '/admin' })

router.post('/signup', AdminController.signUp)
router.get('/app/config', isAuth, isAdmin, AdminController.getConfig)
router.put('/app/config', isAuth, isAdmin, AdminController.configure)


export default router 