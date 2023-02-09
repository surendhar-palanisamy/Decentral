const Todo = require("../models/Todo")


const CreateTodoView = async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo,
    })
    todo.save()
    return res.json(todo)

}

const GetTodosView = async (req, res) => {
    const data = await Todo.find()
    res.json(data)

}



module.exports = {
    CreateTodoView,
    GetTodosView
}