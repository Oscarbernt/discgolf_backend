import mongoose from 'mongoose';
import course from '../models/courseModel.js';

exports.getCourse = (req, res) => {
    course.findById(req.params.courseId, (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    });
};

exports.getAllCourses = (req, res) => {
    course.find({}, (err, courses) => {
        if(err){
            res.send(err);
        }
        res.json(courses);
    });
};

exports.createCourse = (req, res) => {
    debugger
    const newCourse = new course(req.body);

    newCourse.save((err, course) => {
        if(err){
            res.send(err);
        }
        res.json(courses);
    });
};

exports.deleteCourse = (req, res) => {
    course.remove({
        _id: req.params.courseId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `note ${req.params.courseId} successfully deleted`
        });
    });
};