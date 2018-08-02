import React from 'react';

// Components
import ColorCardList from './ColorCardList';

function CubeList(props) {

  console.log(props.sortedCardList);

  return (
    // Refactor to generate recursively
    <div>
      <ColorCardList colorClass='WhiteColumn' columnCardList={props.sortedCardList['White']}/>
      <ColorCardList colorClass='BlueColumn' columnCardList={props.sortedCardList['Blue']}/>
      <ColorCardList colorClass='BlackColumn' columnCardList={props.sortedCardList['Black']}/>
      <ColorCardList colorClass='RedColumn' columnCardList={props.sortedCardList['Red']}/>
      <ColorCardList colorClass='GreenColumn' columnCardList={props.sortedCardList['Green']}/>
      <ColorCardList colorClass='ColorlessColumn' columnCardList={props.sortedCardList['Colorless']}/>
      <ColorCardList colorClass='MulticolorColumn' columnCardList={props.sortedCardList['Multicolor']}/>
    </div>
  );
}

export default CubeList;