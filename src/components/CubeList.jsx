import React from 'react';

// Components
import ColorCardList from './ColorCardList';

function CubeList(props) {

  console.log(props.sortedCardList);

  return (
    // Refactor to generate recursively
    <div>
      <ColorCardList color='W' columnCardList={props.sortedCardList['W']}/>
      <ColorCardList color='U' columnCardList={props.sortedCardList['U']}/>
      <ColorCardList color='B' columnCardList={props.sortedCardList['B']}/>
      <ColorCardList color='R' columnCardList={props.sortedCardList['R']}/>
      <ColorCardList color='G' columnCardList={props.sortedCardList['G']}/>
      <ColorCardList color='C' columnCardList={props.sortedCardList['C']}/>
      <ColorCardList color='MC' columnCardList={props.sortedCardList['MC']}/>
    </div>
  );
}

export default CubeList;