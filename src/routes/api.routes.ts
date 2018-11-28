import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'
import { isAdmin, isStudent } from "../middlewares/role.middleware";
import { isAuth } from "../middlewares/auth.middleware";



const router = new KoaRouter({ prefix: '/api' })
//GENERAL
router.get('/users/search/:search', isAuth, isAdmin, ApiController.userCtrl.getByName)
router.get('/users/:_id', isAuth, isAdmin, ApiController.userCtrl.getById)
router.delete('/users/:_id', isAuth, isAdmin, ApiController.userCtrl.remove)
router.put('/users/block/:_id', isAuth, isAdmin, ApiController.userCtrl.setBlock)


//  SCHOOL YEAR 
router.post('/schoolyears', ApiController.schoolYearCtrl.create)

//ENROLLMENT PROCESS
router.put('/enrollmentprocesses', isAuth, isStudent, ApiController.enrollmentProcessCtrl.updateStep)

//GROUP
router.post('/groups', ApiController.groupCtrl.create)
router.delete('/groups/:_id', ApiController.groupCtrl.remove)
router.put('/groups/:_GroupControllersid/subjectinfo', ApiController.groupCtrl.add)

//SUBJECT INFO 
router.post('/subjectinfo', ApiController.subjectInfoCtrl.create)



//SUBJECT
router.post('/subjects', ApiController.subjectCtrl.create)



//TEACHER
router.post('/teachers', ApiController.teacherCtrl.create)
router.delete('/teachers/:_id', ApiController.teacherCtrl.remove)
router.put('/teachers/:_id', ApiController.teacherCtrl.update)


//STUDENT
router.get('/students', ApiController.studentCtrl.getAll)
router.get('/students/:_id', ApiController.studentCtrl.getAll)
router.put('/students/:_id', ApiController.studentCtrl.update)
router.delete('/students/:_id', ApiController.studentCtrl.remove)

//Financial
router.post('/financials', ApiController.financialCtrl.create)
router.put('/financials/:_id', ApiController.financialCtrl.update)
router.delete('/financials/:_id', ApiController.financialCtrl.remove)

export default router