const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	lessons: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Lesson',
		},
	],
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
