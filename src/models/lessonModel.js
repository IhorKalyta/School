const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	teacher: {
		type: Schema.Types.ObjectId,
		ref: 'Teacher',
	},
	groupOfStudents: {
		type: Schema.Types.ObjectId,
		ref: 'GroupOfStudents',
	},
	room: {
		type: String,
		required: true,
	},
	startTime: {
		type: Date,
		default: Date.now,
	},
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
