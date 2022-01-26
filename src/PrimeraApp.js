import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import PropTypes from 'prop-types';


const PrimeraApp=({ saludo, subtitulo = "soy un subtitulo" })=>{

  

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{subtitulo}</p> 
        </>
    ); 

}

PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps ={
    subtitulo: "soy un subtitulo"
}

export default PrimeraApp;