import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'


const router = new KoaRouter({ prefix: '/api' })

//SUBJECT
router.post('/subject', ApiController.subjectCtrl.addSubject)

//ADMIN
router.get('/admin/app', ApiController.getAppConfig);
router.put('/admin/app', ApiController.configureApp);


//TEACHER
router.post('/teacher', ApiController.teacherCtrl.createTeacher)
router.delete('/teacher/:_id', ApiController.teacherCtrl.deleteTeacher)
router.put('/teacher/:_id', ApiController.teacherCtrl.updateTeacher)


//STUDENT
router.get('/student', ApiController.studentCtrl.getAllStudents)
// router.post('/student', ApiController.studentCtrl.createStudent)


export default router