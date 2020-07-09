const Lesson = require('../models/lessonModel');

exports.getAllLessons = (req, res) => {
	Lesson.find((err, lessons) => {
		if (err) {
			return res.json({
				status: 'error',
				message: err,
			});
		}
		return res.json({
			status: 'success',
			message: 'Lessons retrieved successfully',
			data: lessons,
		});
	});
};

exports.findLessonById = (req, res) => {
	Lesson.findById(req.params.lesson_id, (err, lesson) => {
		if (err) {
			res.send(err);
		}
		res.json({
			message: 'Lesson details loading..',
			data: lesson,
		});
	});
};

exports.newLesson = (req, res) => {
	const lesson = new Lesson();
	lesson.name = req.body.name ? req.body.name : lesson.name;
	lesson.teacher = req.body.teacher;
	lesson.groupOfStudents = req.body.groupOfStudents;
	lesson.room = req.body.room;
	lesson.startTime = req.body.startTime;

	lesson.save((err) => {
		if (err) {
			res.json(err);
		}

		res.json({
			message: 'New lesson created!',
			data: lesson,
		});
	});
};

exports.updateLesson = (req, res) => {
	Lesson.findById(req.params.lesson_id, (err, lesson) => {
		if (err) {
			res.send(err);
		}
		lesson.name = req.body.name ? req.body.name : lesson.name;
		lesson.teacher = req.body.teacher;
		lesson.groupOfStudents = req.body.groupOfStudents;
		lesson.room = req.body.room;
		lesson.startTime = req.body.startTime;

		lesson.save((error) => {
			if (error) {
				res.json(error);
			}
			res.json({
				message: 'Lesson Info updated',
				data: lesson,
			});
		});
	});
};

exports.deleteLesson = (req, res) => {
	Lesson.remove(
		{
			_id: req.params.lesson_id,
		},
		(err) => {
			if (err) {
				res.send(err);
			}
			res.json({
				status: 'success',
				message: 'Lesson deleted',
			});
		},
	);
};
