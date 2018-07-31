import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mtg from 'mtgsdk';

// Components
import Header from './components/Header';
import CubeList from './components/CubeList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCardList : [
        {
          name: "Counterspell",
          colorIdentity: "U",
          cost: "UU",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Remand",
          colorIdentity: "U",
          cost: "CU",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Lightning Bolt",
          colorIdentity: "R",
          cost: "R",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Baneslayer Angel",
          colorIdentity: "W",
          cost: "CCCWW",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Primeval Titan",
          colorIdentity: "G",
          cost: "CCCCGG",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Necropotence",
          colorIdentity: "B",
          cost: "BBB",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Solemn Simulacrum",
          colorIdentity: "C",
          cost: "CCCC",
          get cmc () {
            return this.cost.length;
          }
        },
        {
          name: "Azorious Charm",
          colorIdentity: "UW",
          cost: "UW",
          get cmc () {
            return this.cost.length;
          }
        }
      ]
    }
  }

  sortCards() {
    let sortedCardList = {
      'W': [],
      'U': [],
      'B': [],
      'R': [],
      'G': [],
      'C': [],
      'MC': []
    };

    this.state.masterCardList.forEach(function(card){
      if(sortedCardList.hasOwnProperty(card.colorIdentity)) {
        sortedCardList[card.colorIdentity].push(card);
      }
      else {
        sortedCardList['MC'].push(card);        
      }
    });

    return sortedCardList;
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <CubeList sortedCardList={this.sortCards()}/>
      </div>
    );
  }
}

export default App;
