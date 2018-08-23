import React from 'react';
import Game from '../components/Game';
import {changeCardColor, switchTurn, changeTwoCards, flipFirstCard, flipSecondCard} from '../store/actions';
import { connect } from 'react-redux';
const GamePage = ({cards, turn, flipFirstCard, playerOne, playerTwo, cardOne}) => {
    // const currentPlayer = turn === "PLAYER_ONE" ? playerOne : playerTwo; 
    //check turns and set the current player accordingly possibly by dispatching turns
    //when you dispatch, entire component re renders and you change the turns key
    //pass current player to <Game> as a prop
    // console.log(cardOne);
    return (<Game 
        cards={cards} 
        flipFirstCard={flipFirstCard} 
        playerOne={playerOne} 
        playerTwo={playerTwo} 
        cardOne={cardOne}
        turn={turn}/>);
};
const mapStateToProps = state => ({
    cards: state.cards, 
    playerOne: state.playerOne, 
    playerTwo: state.playerTwo, 
    cardOne: state.cardOne,
    turn: state.turn
});
const mapDispatchToProps = dispatch => ({flipFirstCard: (card, color) => dispatch(flipFirstCard(card, color))});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

