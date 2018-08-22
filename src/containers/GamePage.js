import React from 'react';
import Game from '../components/Game';
import {changeCardColor, switchTurn, changeTwoCards} from '../store/actions';
import { connect } from 'react-redux';
const GamePage = ({cards, changeCardColor, changeTwoCards}) => {
    // const currentPlayer = turn === "PLAYER_ONE" ? playerOne : playerTwo; 
    //check turns and set the current player accordingly possibly by dispatching turns
    //when you dispatch, entire component re renders and you change the turns key
    //pass current player to <Game> as a prop
    console.log("render");
    return (<Game cards={cards} changeCardColor={changeCardColor} changeTwoCards={changeTwoCards}/>);
};
const mapStateToProps = state => ({cards: state.cards, playerOne: state.playerOne, playerTwo: state.playerTwo});
const mapDispatchToProps = dispatch => ({changeCardColor: (id, color) => dispatch(changeCardColor(id, color)), changeTwoCards: (id1, id2, color) => dispatch(changeTwoCards(id1, id2, color))});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

