import React, {useState} from 'react';
import axios from 'axios';
import './create-todo.css';
import {FaPlusCircle} from "react-icons/fa";

function CreateTodo() {
    const [description, setDescription] = useState('');

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            description: description,
            completed: false
        };

        axios.post('http://localhost:5000/todos/add', newTodo)
            .then(res => {
                console.log(res.data);
                setDescription('');

            })
            .catch(err => console.log(err));

        console.log('Form submitted:');
        console.log(`Todo Description: ${description}`);
    }

    return (
        <div className="create-todo-container">
            <h3>Create New Todo</h3>
            <form className="create-todo-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="todoDescription">Todo Description:</label>
                    <input
                        type="text"
                        id="todoDescription"
                        className="form-control"
                        value={description}
                        onChange={onChangeDescription}
                        placeholder="e.g., Walk the dog, Buy groceries"
                    />
                </div>
                <div className="form-group submit-group">
                    {/*<input*/}
                    {/*    type="submit"*/}
                    {/*    value="Create Todo"*/}
                    {/*    className="btn btn-primary"*/}
                    {/*/>*/}
                    {/* Optional: Icon in button - if you decide to use icons */}
                    <button type="submit" className="btn btn-primary">
                        <FaPlusCircle className="submit-icon"/> Create Todo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo;