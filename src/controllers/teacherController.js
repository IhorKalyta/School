Teacher = require('../models/teacherModel');

exports.getAllTeachers = function (req, res) {
    Teacher.find(function (err, teachers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Teachers retrieved successfully",
            data: teachers
        });
    });
};

exports.newTeacher = function (req, res) {
    let teacher = new Teacher();
    teacher.name = req.body.name ? req.body.name : teacher.name;

    teacher.save(function (err) {
        if (err){
            res.json(err);
        }
            
    res.json({
            message: 'New teacher created!',
            data: teacher
        });
    });
};

exports.deleteTeacher = function (req, res) {
    Teacher.remove({
        _id: req.params.teacher_id
    }, function (err) {
        if (err){
            res.send(err);
        }
    res.json({
            status: "success",
            message: 'Teacher deleted'
        });
    });
};
