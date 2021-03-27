import React from 'react'
import "./TodoItem.css"

const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
}

function TodoItem(props) {
    return (
        <li className="item">
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.kezel(props.todo.id)}
            />
            <button
                onClick={() => props.torol(props.todo.id)}>
                Delete
            </button>
            <span style={props.todo.completed ? completedStyle : null}>
                {props.todo.title}
            </span>
        </li>
    )
}

export default TodoItem
