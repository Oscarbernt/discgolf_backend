import mongoose, { Schema } from 'mongoose';

/**
 * Create databse scheme for courses
 */
const courseSchema  = new Schema({
    name: {
        type: String,
        required: "What is the course called?"
    },
    holes:[
        { number: Number, par: Number }
    ]
})

module.exports = mongoose.model('Course', courseSchema)