import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'



const router = new KoaRouter({ prefix: '/api' })

//GROUP
router.post('/group', ApiController.groupCtrl.createGroup)
router.delete('/group/:_id', ApiController.groupCtrl.deleteGroup)

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
router.put('/student/:_id', ApiController.studentCtrl.updateStudent)
// router.post('/student', ApiController.studentCtrl.createStudent)


export default router