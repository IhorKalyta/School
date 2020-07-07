const lessonController = require('../controllers/lessonController');
const router = require('express').Router();
const auth = require('../middlewares/auth');

router.route('/',auth)
	.get(lessonController.getAllLessons)
	.post(lessonController.newLesson);

router.route('/lessons/:lesson_id')
	.get(lessonController.findLessonById)
	.put(lessonController.updateLesson)
	.delete(lessonController.deleteLesson);

module.exports = router;
