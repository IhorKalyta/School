const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupOfStudentsSchema = mongoose.Schema({
	nameOfGroup: {
		type: String,
		required: true
	},
	participants: [{
		type: Schema.Types.ObjectId,
		ref: 'Student'
	}],
	lessons: [{
		type: Schema.Types.ObjectId,
		ref: 'Lesson'
	}]
});

const GroupOfStudents = mongoose.model('GroupOfStudents', groupOfStudentsSchema);
module.exports = GroupOfStudents;
