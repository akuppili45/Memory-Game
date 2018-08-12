import React from 'react';
import Cards from './Cards';

const Game = ({ cards, changeCardColor }) => (
    <Cards cards={cards} changeCardColor={changeCardColor}/>
);
export default Game;
