const router = require('express').Router();
const lessonController = require('../controllers/lessonController');

router.route('/')
	.get(lessonController.getAllLessons)
	.post(lessonController.newLesson);

router.route('/:lesson_id')
	.get(lessonController.findLessonById)
	.put(lessonController.updateLesson)
	.delete(lessonController.deleteLesson);

module.exports = router;
