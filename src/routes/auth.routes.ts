// import { authController, signUpController } from "../controllers/auth.controller";
import AuthControllers from '../controllers/auth.controller'
import * as KoaRouter from 'koa-router'
import { isEnrollment } from '../middlewares/app.middleware';



const router = new KoaRouter({ prefix: '/auth' })
router.post('/signin', AuthControllers.signIn)
router.post('/signup', isEnrollment, AuthControllers.signUp)



export default router