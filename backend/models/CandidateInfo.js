const mongoose = require('mongoose')

const candidateInfoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    vote: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('CandidateInfo', candidateInfoSchema);