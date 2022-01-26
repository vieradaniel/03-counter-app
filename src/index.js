import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import CounterApp from "./CounterApp";



const divRoot= document.querySelector('#root');
console.log(divRoot)

ReactDOM.render( <CounterApp  value= {0} /> , divRoot);