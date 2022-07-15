import React, { Component } from 'react';

import Navbar from './components/navbar';
import Card from './components/card';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';
class App extends Component {

  state = {
    cards: [
      { id: 0, nome: "ciccio", prezzo: 1.99, immagine: california, quantita: 0 },
      { id: 1, nome: "dragon", prezzo: 1.99, immagine: dragon, quantita: 0 },
      { id: 2, nome: "dynamite", prezzo: 1.99, immagine: dynamite, quantita: 0 },
      { id: 3, nome: "philadelphia", prezzo: 1.99, immagine: philadelphia, quantita: 0 },
      { id: 4, nome: "rainbow", prezzo: 1.99, immagine: rainbow, quantita: 0 }
    ]
  }

  handleDelete = cardId => {
    const updateCard = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards: updateCard })
  }
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantita++;
    this.setState({ cards });


  }

  render() {

    return (
      <>
        <div className='container'>
          <Navbar />
          <div className='row'>

            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                onDelette={this.handleDelete}
                onIncrement={this.handleIncrement}

              />
            ))}

          </div>

        </div>
      </>
    );
  }
}

export default App;
