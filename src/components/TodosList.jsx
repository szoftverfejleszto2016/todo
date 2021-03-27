import React from 'react'
import TodoItem from './TodoItem'

function TodosList(props) {
    return (
        <ul>
            {props.todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    kezel={props.kezel}
                    torol={props.torol}
                    frissit={props.frissit}
                />
            )}
        </ul>
    )
}

export default TodosList
