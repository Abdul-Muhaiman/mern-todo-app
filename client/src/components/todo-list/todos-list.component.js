import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoItem from "../todo-item/todo-item.component";
import './todo-list.css';

function TodosList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/todos/')
            .then(response => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="todos-list-container">
            <h3>Todos List</h3>
            <ul className="todos-ul">
                {todos.map(todo => (
                    <li key={todo._id} className="todo-list-item">
                        <TodoItem text={todo.description} complete={Boolean(todo.complete)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodosList;