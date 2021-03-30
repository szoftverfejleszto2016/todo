import React, { useState, useEffect } from 'react'
import Header from './Header'
import InputTodo from './InputTodo';
import TodosList from './TodosList'

function TodoContainer() {
    const [todos, setTodos] = useState([]);

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

    // betöltés
    useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos)
            setTodos(loadedTodos)
    }, [])

    // tárolás
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

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
