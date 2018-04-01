import React from 'react';

const Navbar = (props) => {
  return (
    <div id="nav">
      <button id="dogs" 
        onClick={props.handleClick}>Dogs</button>
      <button id="cats" 
        onClick={props.handleClick}>Cats</button>
      <button id="dragons" 
        onClick={props.handleClick}>Dragons</button>
      <button id="clear" 
        onClick={props.handleClear}>Clear</button>
    </div>
  )
}

export default Navbar;
