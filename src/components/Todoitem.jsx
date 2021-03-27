import React, { useState } from 'react'
import "./TodoItem.css"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const [editing, setEditing] = useState(false);

    function szerkeszt() {
        setEditing(true);
    }

    function vege(e) {
        if (e.key === "Enter") {
            setEditing(false);
        };
    }
    

    let viewMode = {};
    let editMode = {};
    if (editing)
        viewMode.display = "none";
    else
        editMode.display = "none";

    return (
        <li className="item">
            <div onDoubleClick={szerkeszt} style={viewMode}>
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
            </div>
            <input
                type="text"
                style={editMode}
                value={props.todo.title}
                onChange={function (e) {
                    props.frissit(e.target.value, props.todo.id);
                }}
                onKeyDown={vege}
            />
        </li>
    )
}

export default TodoItem
