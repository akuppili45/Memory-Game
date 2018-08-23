import React from 'react';
import Cards from './Cards';

const Game = ({ cards, changeCardColor, flipFirstCard, playerOne, playerTwo, cardOne, turn, flipSecondCard}) => (
    <Cards 
    cards={cards} 
    flipFirstCard={flipFirstCard} 
    playerOne={playerOne} 
    playerTwo={playerTwo}
    cardOne={cardOne} 
    turn={turn}
    flipSecondCard={flipSecondCard}/>
);
export default Game;
