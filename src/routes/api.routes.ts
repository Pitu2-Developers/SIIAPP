import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'



const router = new KoaRouter({ prefix: '/api' })

//GROUP
router.post('/group', ApiController.groupCtrl.create)
router.delete('/group/:_id', ApiController.groupCtrl.delete)

//SUBJECT
router.post('/subject', ApiController.subjectCtrl.create)

//ADMIN
router.get('/admin/app', ApiController.getAppConfig);
router.put('/admin/app', ApiController.configureApp);


//TEACHER
router.post('/teacher', ApiController.teacherCtrl.create)
router.delete('/teacher/:_id', ApiController.teacherCtrl.delete)
router.put('/teacher/:_id', ApiController.teacherCtrl.update)


//STUDENT
router.get('/student', ApiController.studentCtrl.getAll)
router.get('/student/:_id', ApiController.studentCtrl.getAll)
router.put('/student/:_id', ApiController.studentCtrl.update)
router.delete('/student/:_id', ApiController.studentCtrl.delete)


export default router