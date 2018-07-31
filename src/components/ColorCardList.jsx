import React from 'react';
import './css/ColorCardList.css';

// Components

function ColorCardList(props) {

// Generate cards recursively

  return (
    <div className={`colorColumn ${ props.colorClass }`}>
      <p>{props.columnCardList[0].name}</p>
    </div>
  );
}

export default ColorCardList;