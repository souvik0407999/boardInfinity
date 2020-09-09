import React from 'react';
const Buttons = (props) => {
    return (
        <button className='button' onClick={()=>{props.handleClick()}}>Search</button>
    )
  };
export default Buttons;