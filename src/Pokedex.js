import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { isWinner, pokes, exp } = this.props;
    return (
      <div className='Pokedex'>
        <h1>Pokedex</h1>
        <p>Total Experience:{exp}</p>
        <p>{isWinner ? 'WINNER' : 'LOSER'}</p>
        <div className='Pokedex-cards'>
          {pokes.map((poke) => (
            <Pokecard key={poke.name} poke={poke} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
