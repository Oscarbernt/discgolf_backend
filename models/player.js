import mongoose, { Schema } from 'mongoose';

/**
 * Create databse scheme for palyer
 */
const playerSchema  = new Schema({
    name: {
        type: String,
        required: "What is the player named?"
    }
})

module.exports = mongoose.model('Player', playerSchema)