import { React, useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {
  // Hook: useState
  // Value es el valor inicial
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (event) => {
    // console.log(event);

    // Una opción para poder cambiar el estado
    // setCounter( counter +1 );

    // Otra opción para poder cambiar el estado
    setCounter( (c) => c + 1 );
  }

  const handleSubtract = () => {
    setCounter( counter -1 );
    // setCounter( (c) => c -1 );
  }

  const handleReset = () => {
    setCounter( value );
    // setCounter( (c) => c = value );
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubtract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

// CounterApp.defaultProps = {

// }

