import React from 'react';
// import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
      width: 40%;
      margin: 16px auto;
      padding: 16px;
      text-align: center;
      border: 1px solid silver;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0px 1px 3px darkgrey;
      transition: 0.2s;
      &:hover {
        transition: 0.2s;
        box-shadow: 0px 1px 9px darkgrey;
      }

      @media (min-width: 500px) {
        width: '450px'
      }
`;

const person = (props) => {
  // const stylePerson = {
  //   '@media (min-width: 500px': {
  //     width: '450px'
  //   }
  // };
  return (
    // <div className = "Person" style={stylePerson}>
    <StyledDiv>
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
      <p>{ props.children }</p>
      <input type="text" value={ props.name } onChange={ props.change }/>
    </StyledDiv>
    // </div>
  )
}

export default person;