const groupOfStudentsController = require('../controllers/groupOfStudentsController');
const router = require('express').Router();

router.route('/')
	.get(groupOfStudentsController.getAllGroupsOfStudents)
	.post(groupOfStudentsController.newGroupOfStudents);

router.route('/:groupOfStudents_id')
	.delete(groupOfStudentsController.deleteGroupOfStudent);

module.exports = router;
