import React from 'react';
import {FaCheckSquare, FaEdit, FaRegSquare, FaTrash} from "react-icons/fa"
import "./todo-item.css" // Import CSS

function TodoItem({text, complete}) {
    console.log(complete)
    return (
        <div className={`todo-item ${complete ? 'completed' : ''}`}>
            <div className="check-icon">
                {!complete ?
                    <FaRegSquare className="incomplete-icon"/> : <FaCheckSquare className="complete-icon"/>}
            </div>
            <div className="todo-text">
                <p>{complete ? <del>{text}</del> : text}</p>
            </div>
            <div className="edit-delete-icons">
                <div className="edit-icon">
                    <FaEdit/>
                </div>
                <div className="delete-icon">
                    <FaTrash/>
                </div>
            </div>
        </div>)
}

export default TodoItem;