import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'


const router = new KoaRouter({ prefix: '/api' })

//ADMIN
router.get('/admin/app', ApiController.getAppConfig);
router.put('/admin/app', ApiController.configureApp);


//TEACHER
router.post('/teacher', ApiController.teacherCtrl.createTeacher)



//STUDENT
router.post('/student', ApiController.studentCtrl.createStudent)
router.get('/student', ApiController.studentCtrl.getAllStudents)


export default router