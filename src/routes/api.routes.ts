import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'


const router = new KoaRouter({ prefix: '/api' })


//ADMIN
router.get('/admin/app', ApiController.getAppConfig);
router.put('/admin/app', ApiController.configureApp);


//TEACHER
router.post('/teacher', ApiController.teacherCtrl.createTeacher)



//STUDENT
router.get('/student', ApiController.studentCtrl.getAllStudents)
// router.post('/student', ApiController.studentCtrl.createStudent)


export default router