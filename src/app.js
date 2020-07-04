const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./db/connect');

const app = express();
const welcomeRoutes = require('./routes/index');
const lessonRoutes = require('./routes/lessonRouter');
const teacherRoutes = require('./routes/teacherRouter');
const studentRoutes = require('./routes/studentRouter');
const groupOfStudentRoutes = require('./routes/groupOfStudentsRouter');

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());

app.use('/', welcomeRoutes);
app.use('/lessons', lessonRoutes);
app.use('/teachers', teacherRoutes);
app.use('/students', studentRoutes);
app.use('/groupOfStudents', groupOfStudentRoutes);

const port = process.env.PORT || 8080;

connectDb().then(async () => {
	app.listen(port, function () {
		console.log('Running School on port ' + port);
	});
});

//--> Testing Mongo <--

// let Lesson = require('./models/lessonModel');
// const GroupOfStudents = require('./models/groupOfStudentsModel');

// const getLessonWithPopulate = function(id) {
//     return Lesson.findById(id).populate("groupOfStudents").populate("participants");
// };

// const run = async function() {
//     let lesson = await getLessonWithPopulate('5efdf539aff79f1c24ea1ee8');
//     console.log("\n>> populated Lesson:\n", lesson);
// };

// const getGroupWithPopulate = function(id) {
//     return GroupOfStudents.findById(id).populate("participants");
// };

// const run1 = async function() {
//     let group = await getGroupWithPopulate('5efdf49caff79f1c24ea1ee7');
//     console.log("\n>> populated group:\n", group);
// };

// run1();
