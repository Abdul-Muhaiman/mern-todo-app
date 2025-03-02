import React from 'react';
import TodosList from './components/todo-list/todos-list.component';
import CreateTodo from './components/create-todo/create-todo.component';
import './App.css';

function App() {
    return (
        <div className="main-app">
            <div className="app-container">
                <h1>My To-Do List</h1>
                <CreateTodo/>
                <TodosList/>
            </div>
        </div>
    );
}

export default App;