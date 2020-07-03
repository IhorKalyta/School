GroupOfStudents = require('../models/groupOfStudentsModel');

exports.getAllGroupsOfStudents = function (req, res) {
    GroupOfStudents.find(function (err, groupOfStudents) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Group of students retrieved successfully",
            data: groupOfStudents
        });
    });
};

exports.newGroupOfStudents = function (req, res) {
    let groupOfStudents = new GroupOfStudents();
    groupOfStudents.nameOfGroup = req.body.nameOfGroup ? req.body.nameOfGroup : groupOfStudents.nameOfGroup;
    groupOfStudents.participants = req.body.participants;
    groupOfStudents.lessons = req.body.lessons;

    groupOfStudents.save(function (err) {
        if (err){
            res.json(err);
        }
            
    res.json({
            message: 'New group of students created!',
            data: groupOfStudents
        });
    });
};

exports.deleteGroupOfStudent = function (req, res) {
    GroupOfStudents.deleteOne({
        _id: req.params.groupOfStudents_id
    }, function (err) {
        if (err){
            res.send(err);
        }
    res.json({
            status: "success",
            message: 'Group of students deleted'
        });
    });
};