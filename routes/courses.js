const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



// Create one course
router.post('/', async (req, res) => {
    const course = new Course({
        name: req.body.name,
        holes: req.body.holes
    });
    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Get one course
router.get('/:id', getCourse, (req, res) => {
    res.json(res.course)
})

// Update one course
router.patch('/:id', getCourse, async (req, res) => {
    if (req.body.name != null) {
        res.course.name = req.body.name;
    }
    if (req.body.holes != null) {
        res.course.holes = req.body.holes;
    }
    try {
        const updatedCourse = await res.course.save();
        res.json(updatedCourse);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Delete one course
router.delete('/:id', getCourse, async (req, res) => {
    try {
        await res.course.remove()
        res.json({ message: 'Deleted course' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getCourse(req, res, next) {
    let course = undefined;
    try {
        course = await Course.findById(req.params.id)
        if (course == null) {
            return res.status(404).json({ message: 'Cannot find course' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.course = course
    next()
}

module.exports = router;