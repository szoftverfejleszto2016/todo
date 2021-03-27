import React, { useState } from 'react'
import Header from './Header'
import InputTodo from './InputTodo';
import TodosList from './TodosList'

function TodoContainer() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Setup development environment",
            completed: true
        },
        {
            id: 2,
            title: "Develop website and add content",
            completed: false
        },
        {
            id: 3,
            title: "Deploy to live server",
            completed: false
        }
    ])

    function valtozas(id) {
        setTodos(function (elozo) {
            return elozo.map(todo => {
                if (todo.id === id)
                    todo = { ...todo, completed: !todo.completed };
                return todo;
            })
        });
    }

    function torles(id) {
        setTodos(elozo => elozo.filter(todo => todo.id !== id));
    }

    function uj(newtitle) {
        const newtodo = {
            id: todos.length + 1,
            title: newtitle,
            completed: false
        }
        setTodos(elozo => [...elozo, newtodo]);
    }

    function frissites(newTitle, id) {
        setTodos(function (elozo) {
            return elozo.map(todo => {
                if (todo.id === id)
                    todo.title = newTitle;
                return todo;
            })
        });
    }

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo hozzaad={uj} />
                <TodosList
                    todos={todos}
                    kezel={valtozas}
                    torol={torles}
                    frissit={frissites}
                />
            </div>
        </div>
    )
}

export default TodoContainer
