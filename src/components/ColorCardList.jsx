import React from 'react';
import './css/ColorCardList.css';

// Components

function ColorCardList(props) {
  return (
    <div class='colorColumn'>
      <h1>{props.color}</h1>
      <p>{props.columnCardList[0].name}</p>
    </div>
  );
}

export default ColorCardList;