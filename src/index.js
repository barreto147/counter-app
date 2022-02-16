import React from "react";
import ReactDOM from "react-dom";

const saludo = <h1>Hola Mundo</h1>;

console.log(saludo);

const divRoot = document.querySelector("#root");

ReactDOM.render(saludo, divRoot);
