import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa"

function InputTodo(props) {
    const [title, setTitle] = useState("");

    function bevitel(e) {
        setTitle(e.target.value);
    }

    function gomb(e) {
        e.preventDefault();
        if (title.trim().length > 0)
            props.hozzaad(title);
        setTitle("");
    }

    return (
        <form onSubmit={gomb} className="form-container">
            <input
                className="input-text"
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={bevitel}
            />
            <button className="input-submit">
                <FaPlusCircle color="darkcyan" size="24px" />
            </button>
        </form>
    )
}

export default InputTodo
