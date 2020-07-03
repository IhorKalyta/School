const lessonController = require('../controllers/lessonController');
const router = require('express').Router();

router.route('/')
    .get(lessonController.getAllLessons)
    .post(lessonController.newLesson);

router.route('/lessons/:lesson_id')
    .get(lessonController.findLessonById)
    .put(lessonController.updateLesson)
    .delete(lessonController.deleteLesson);  

module.exports = router;
