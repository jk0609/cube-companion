import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mtg from 'mtgsdk';

// Components
import Header from './components/Header';
import CubeList from './components/CubeList';

// Models
import Card from './models/card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCardList : []
    }
  }

  getCards() {
    // Temporary, should be DB sourced
    var unsortedCardList = [
      'Counterspell',
      'Lightning Bolt',
      'Necropotence',
      'Baneslayer Angel',
      'Primeval Titan',
      'Solemn Simulacrum',
      'Azorious Charm'
    ]

    unsortedCardList.forEach( cubeCard =>
      mtg.card.where({ name: cubeCard })
      .then(cards => {
          let foundCard = cards[0];
          this.state.masterCardList.push(
            new Card(
              foundCard.name,
              foundCard.id,
              foundCard.manaCost,
              foundCard.colors
            )
          );
      })
    )
    
    console.log(this.state.masterCardList, 'master');
  }

  sortCards() {
    let sortedCardList = {
      'White': [],
      'Blue': [],
      'Black': [],
      'Red': [],
      'Green': [],
      'Colorless': [],
      'Multicolor': []
    };

    this.state.masterCardList.forEach(function(card){
      if(sortedCardList.hasOwnProperty(card.colors)) {
        sortedCardList[card.colorIdentity].push(card);
      }
      else {
        sortedCardList['MC'].push(card);        
      }
    });

    return sortedCardList;
  }

  render() {
    this.getCards();

    return (
      <div className='App'>
        <Header/>
        <CubeList sortedCardList={this.sortCards()}/>
      </div>
    );
  }
}

export default App;
