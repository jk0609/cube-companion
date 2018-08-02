import React from 'react';
import './css/ColorCardList.css';

// Components

function ColorCardList(props) {

// Generate cards recursively

  return (
    <div className={`colorColumn ${ props.colorClass }`}>
    </div>
  );
}

export default ColorCardList;