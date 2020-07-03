Student = require('../models/studentModel');

exports.getAllStudents = function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Students retrieved successfully",
            data: students
        });
    });
};

exports.newStudent = function (req, res) {
    let student = new Student();
    student.name = req.body.name ? req.body.name : student.name;

    student.save(function (err) {
        if (err){
            res.json(err);
        }
            
    res.json({
            message: 'New student created!',
            data: student
        });
    });
};

exports.deleteStudent = function (req, res) {
    Student.deleteOne({
        _id: req.params.student_id
    }, function (err) {
        if (err){
            res.send(err);
        }
    res.json({
            status: "success",
            message: 'Student deleted'
        });
    });
};
