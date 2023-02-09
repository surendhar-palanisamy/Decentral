const Todo = require("../models/Todo")


const CreateTodoView = async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo,
        completed: req.body.completed
    })
    todo.save()
    res.json(todo)

}

const GetTodosView = async (req, res) => {
    const data = await Todo.find()
    res.json(data)

}


const UpdateTodosView = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.completed = !todo.completed
    todo.save()
    res.json(todo)

}

const DeleteTodosView = async (req, res) => {
    const data = await Todo.findByIdAndDelete(req.params.id)
    res.json(data)

}




module.exports = {
    CreateTodoView,
    GetTodosView,
    UpdateTodosView,
    DeleteTodosView
}