const router = require('express').Router();
const teacherController = require('../controllers/teacherController');

router.route('/')
	.get(teacherController.getAllTeachers)
	.post(teacherController.newTeacher);

router.route('/:teacher_id')
	.delete(teacherController.deleteTeacher);

module.exports = router;
