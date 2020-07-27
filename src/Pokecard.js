import React, { Component } from 'react';
import './Pokecard.css';
class Pokecard extends Component {
  render() {
    const { name, type, base_experience, id } = this.props.poke;
    const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <img src={pokeUrl} alt={name} />
        <div className='Pokecard-data'>Type:{type}</div>
        <div className='Pokecard-data'>EXP:{base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
