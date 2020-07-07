const Lesson = require('../models/lessonModel');

exports.getAllLessons = function (req, res) {
	Lesson.find(function (err, lessons) {
		if (err) {
			res.json({
				status: 'error',
				message: err,
			});
		}
		res.json({
			status: 'success',
			message: 'Lessons retrieved successfully',
			data: lessons,
		});
	});
};

exports.findLessonById = function (req, res) {
	Lesson.findById(req.params.lesson_id, function (err, lesson) {
		if (err) {
			res.send(err);
		}
		res.json({
			message: 'Lesson details loading..',
			data: lesson,
		});
	});
};

exports.newLesson = function (req, res) {
	let lesson = new Lesson();
	lesson.name = req.body.name ? req.body.name : lesson.name;
	lesson.teacher = req.body.teacher;
	lesson.groupOfStudents = req.body.groupOfStudents;
	lesson.room = req.body.room;
	lesson.startTime = req.body.startTime;

	lesson.save(function (err) {
		if (err) {
			res.json(err);
		}

		res.json({
			message: 'New lesson created!',
			data: lesson,
		});
	});
};

exports.updateLesson = function (req, res) {
	Lesson.findById(req.params.lesson_id, function (err, lesson) {
		if (err) {
			res.send(err);
		}
		lesson.name = req.body.name ? req.body.name : lesson.name;
		lesson.teacher = req.body.teacher;
		lesson.groupOfStudents = req.body.groupOfStudents;
		lesson.room = req.body.room;
		lesson.startTime = req.body.startTime;

		lesson.save(function (err) {
			if (err) {
				res.json(err);
			}
			res.json({
				message: 'Lesson Info updated',
				data: lesson,
			});
		});
	});
};

exports.deleteLesson = function (req, res) {
	Lesson.remove(
		{
			_id: req.params.lesson_id,
		},
		function (err) {
			if (err) {
				res.send(err);
			}
			res.json({
				status: 'success',
				message: 'Lesson deleted',
			});
		}
	);
};
