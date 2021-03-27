import React from 'react'

const stilus = {
    fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "#ececec",
    textTransform: "lowercase",
    textAlign: "center",
  };

function Header() {
    return (
        <header style={{padding: "20px 0", lineHeight: "1.5em"}}>
            <h1 style={stilus}>todos</h1>
        </header>
    )
}

export default Header
