import React from 'react';
import ReactDOM from "react-dom"

const App = () => {
    return(
        <h1>Início do App</h1>
    )   
}

const root = document.querySelector("#root");

ReactDOM.render(<App/>, root)