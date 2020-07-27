import React, { Component } from 'react';
import './Pokecard.css';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    const { name, type, base_experience, id } = this.props.poke;
    const pokeUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(
      id
    )}.png`;

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className='Pokecard-image'>
          <img src={pokeUrl} alt={name} />
        </div>
        <div className='Pokecard-data'>Type:{type}</div>
        <div className='Pokecard-data'>EXP:{base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
