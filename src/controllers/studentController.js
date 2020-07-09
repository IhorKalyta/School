const Student = require('../models/studentModel');

exports.getAllStudents = (req, res) => {
	Student.find((err, students) => {
		if (err) {
			return res.json({
				status: 'error',
				message: err,
			});
		}
		return res.json({
			status: 'success',
			message: 'Students retrieved successfully',
			data: students,
		});
	});
};

exports.newStudent = (req, res) => {
	const student = new Student();
	student.name = req.body.name ? req.body.name : student.name;

	student.save((err) => {
		if (err) {
			res.json(err);
		}

		res.json({
			message: 'New student created!',
			data: student,
		});
	});
};

exports.deleteStudent = (req, res) => {
	Student.deleteOne(
		{
			_id: req.params.student_id,
		},
		(err) => {
			if (err) {
				res.send(err);
			}
			res.json({
				status: 'success',
				message: 'Student deleted',
			});
		},
	);
};
