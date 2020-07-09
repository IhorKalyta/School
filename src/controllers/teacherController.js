const Teacher = require('../models/teacherModel');

exports.getAllTeachers = (req, res) => {
	Teacher.find((err, teachers) => {
		if (err) {
			return res.json({
				status: 'error',
				message: err,
			});
		}
		return res.json({
			status: 'success',
			message: 'Teachers retrieved successfully',
			data: teachers,
		});
	});
};

exports.newTeacher = (req, res) => {
	const teacher = new Teacher();
	teacher.name = req.body.name ? req.body.name : teacher.name;

	teacher.save((err) => {
		if (err) {
			res.json(err);
		}

		res.json({
			message: 'New teacher created!',
			data: teacher,
		});
	});
};

exports.deleteTeacher = (req, res) => {
	Teacher.remove(
		{
			_id: req.params.teacher_id,
		},
		(err) => {
			if (err) {
				res.send(err);
			}
			res.json({
				status: 'success',
				message: 'Teacher deleted',
			});
		},
	);
};
