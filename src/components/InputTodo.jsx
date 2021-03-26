import React, { useState } from 'react'

function InputTodo(props) {
    const [title, setTitle] = useState("");

    function bevitel(e) {
        setTitle(e.target.value);
    }

    function gomb(e) {
        e.preventDefault();
        props.hozzaad(title);
        setTitle("");
    }

    return (
        <form onSubmit={gomb}>
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={bevitel}
            />
            <button>Submit</button>
        </form>
    )
}

export default InputTodo
