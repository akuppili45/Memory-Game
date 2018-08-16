import React from 'react';
import Cards from './Cards';

const Game = ({ cards, changeCardColor, playerOne, playerTwo, switchTurn }) => (
    <Cards cards={cards} changeCardColor={changeCardColor} playerOne={playerOne} playerTwo={playerTwo} switchTurn={switchTurn}/>
);
export default Game;
