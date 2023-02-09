const { default: mongoose } = require("mongoose");


const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        default: Date.now()
    },
})

module.exports = mongoose.model('Todo', TodoSchema)