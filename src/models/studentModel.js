const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	group: {
		type: Schema.Types.ObjectId,
		ref: 'GroupOfStudents'
	}
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
