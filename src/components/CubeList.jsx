import React from 'react';

// Components
import ColorCardList from './ColorCardList';

function CubeList(props) {

  console.log(props.sortedCardList);

  return (
    // Refactor to generate recursively
    <div>
      <ColorCardList colorClass='WColumn' columnCardList={props.sortedCardList['W']}/>
      <ColorCardList colorClass='UColumn' columnCardList={props.sortedCardList['U']}/>
      <ColorCardList colorClass='BColumn' columnCardList={props.sortedCardList['B']}/>
      <ColorCardList colorClass='RColumn' columnCardList={props.sortedCardList['R']}/>
      <ColorCardList colorClass='GColumn' columnCardList={props.sortedCardList['G']}/>
      <ColorCardList colorClass='CColumn' columnCardList={props.sortedCardList['C']}/>
      <ColorCardList colorClass='MCColumn' columnCardList={props.sortedCardList['MC']}/>
    </div>
  );
}

export default CubeList;