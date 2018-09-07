// import { authController, signUpController } from "../controllers/auth.controller";
import AuthControllers from '../controllers/auth.controller'
import * as KoaRouter from 'koa-router'



const router = new KoaRouter({ prefix: '/auth' })
router.post('/signin', AuthControllers.signIn.bind(AuthControllers))
router.post('/signup', AuthControllers.signUp.bind(AuthControllers))


export default router