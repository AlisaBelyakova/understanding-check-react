import React from 'react';

const Critters = (props) => {
  return (
    <div id="critters" >
      <ul>
        {props.data.map( (animal,ind) => (
          <li key={ind}>
            <h3>{animal.name}</h3>
            <img src={animal.image} />
          </li>
          ))}
      </ul>
    </div> 
  )
}

export default Critters;
