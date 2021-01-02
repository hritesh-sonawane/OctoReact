import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
      <p>{ props.children }</p>
      <input type="text" value={ props.name } onChange={ props.change}/>
    </div>
  )
}

export default person;