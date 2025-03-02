const express = require('express');
const router = express.Router();
let Todo = require('../models/todo.model');

//Get current list
router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Create new todo
router.route('/add').post((req, res) => {
    const description = req.body.description;
    const completed = req.body.completed;

    const newTodo = new Todo({
        description,
        completed,
    });

    newTodo.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Get by ID
router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by ID
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by ID
router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id).then(todo => {
        todo.description = req.body.description
        todo.completed = req.body.completed

        todo.save().then(() => res.json("Todo Updated!"))
            .catch(err => res.status(400).json('Error: ' + err));
    }).catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;