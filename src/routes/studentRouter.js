const studentController = require('../controllers/studentController');
const router = require('express').Router();

router.route('/')
	.get(studentController.getAllStudents)
	.post(studentController.newStudent);

router.route('/:student_id')
	.delete(studentController.deleteStudent);

module.exports = router;
