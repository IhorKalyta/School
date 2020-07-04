const teacherController = require('../controllers/teacherController');
const router = require('express').Router();

router
	.route('/')
	.get(teacherController.getAllTeachers)
	.post(teacherController.newTeacher);

router.route('/:teacher_id').delete(teacherController.deleteTeacher);

module.exports = router;
