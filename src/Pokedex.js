import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { isWinner, pokes, exp } = this.props;
    return (
      <div className='Pokedex'>
        <h3 className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>
          {isWinner ? 'Winning hand' : 'Losing hand'}
        </h3>
        <h4>Total Experience:{exp}</h4>
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
