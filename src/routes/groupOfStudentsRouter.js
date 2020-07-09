const router = require('express').Router();
const groupOfStudentsController = require('../controllers/groupOfStudentsController');

router.route('/')
	.get(groupOfStudentsController.getAllGroupsOfStudents)
	.post(groupOfStudentsController.newGroupOfStudents);

router.route('/:groupOfStudents_id')
	.delete(groupOfStudentsController.deleteGroupOfStudent);

module.exports = router;
