require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./db/connect');
const auth = require('./middlewares/auth');

const app = express();
const welcomeRoutes = require('./routes/index');
const authorizationRouter = require('./routes/authorization');
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
app.use('/authorization', authorizationRouter);
app.use('/lessons', auth, lessonRoutes);
app.use('/teachers', auth, teacherRoutes);
app.use('/students', auth, studentRoutes);
app.use('/groupOfStudents', auth, groupOfStudentRoutes);

connectDb().then(async () => {
	app.listen(process.env.PORT, function () {
		console.log('Running School on port ' + process.env.PORT);
	});
});
