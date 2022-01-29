import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";


const divRoot= document.querySelector('#root');
console.log(divRoot)

//ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku"  /> , divRoot);
ReactDOM.render( <CounterApp /> , divRoot);