const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupOfStudentsSchema = mongoose.Schema({
	nameOfGroup: {
		type: String,
		unique: true,
		required: true,
	},
	participants: [{
		type: Schema.Types.ObjectId,
		ref: 'Student',
	}],
	lessons: [{
		type: Schema.Types.ObjectId,
		ref: 'Lesson',
	}],
});

const GroupOfStudents = mongoose.model('GroupOfStudents', groupOfStudentsSchema);
module.exports = GroupOfStudents;
