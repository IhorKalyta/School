const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.route('/')
	.get(studentController.getAllStudents)
	.post(studentController.newStudent);

router.route('/:student_id')
	.delete(studentController.deleteStudent);

module.exports = router;
