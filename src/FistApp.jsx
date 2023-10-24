import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const newMessage = {
  title: 'pepe',
  subTitle: 123
}

const getResult = (a, b) => {
  return a + b;
}

export const FistApp = ( props ) => {
  console.log(props);

  return (
    <>
        <h1> { props.title } </h1>
        <div>{ props.subTitle }</div>
    </>
  )
}

// PropTypes
FistApp.propTypes = {
  subTitle: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

// DefaultProps
FistApp.defaultProps = {
  name: 'Victor',
  subTitle: 'No hay subitulo',
  title: 'No hay title'
}
