const GroupOfStudents = require('../models/groupOfStudentsModel');

exports.getAllGroupsOfStudents = (req, res) => {
	GroupOfStudents.find((err, groupOfStudents) => {
		if (err) {
			return res.json({
				status: 'error',
				message: err,
			});
		}
		return res.json({
			status: 'success',
			message: 'Group of students retrieved successfully',
			data: groupOfStudents,
		});
	});
};

exports.newGroupOfStudents = (req, res) => {
	const groupOfStudents = new GroupOfStudents();
	groupOfStudents.nameOfGroup = req.body.nameOfGroup
		? req.body.nameOfGroup
		: groupOfStudents.nameOfGroup;
	groupOfStudents.participants = req.body.participants;
	groupOfStudents.lessons = req.body.lessons;

	groupOfStudents.save((err) => {
		if (err) {
			res.json(err);
		}

		res.json({
			message: 'New group of students created!',
			data: groupOfStudents,
		});
	});
};

exports.deleteGroupOfStudent = (req, res) => {
	GroupOfStudents.deleteOne(
		{
			_id: req.params.groupOfStudents_id,
		},
		(err) => {
			if (err) {
				res.send(err);
			}
			res.json({
				status: 'success',
				message: 'Group of students deleted',
			});
		},
	);
};
