import React from 'react';
import Cards from './Cards';

const Game = ({ cards, changeCardColor, flipFirstCard, playerOne, playerTwo, cardOne, turn}) => (
    <Cards 
    cards={cards} 
    flipFirstCard={flipFirstCard} 
    playerOne={playerOne} 
    cardOne={cardOne} 
    turn={turn}/>
);
export default Game;
