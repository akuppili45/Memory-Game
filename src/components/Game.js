import React from 'react';
import Cards from './Cards';

const Game = ({ cards, changeCardColor, changeTwoCards}) => (
    <Cards cards={cards} changeCardColor={changeCardColor} changeTwoCards={changeTwoCards}/>
);
export default Game;
