import React from 'react';
import Game from '../components/Game';
import {changeCardColor, switchTurn} from '../store/actions';
import { connect } from 'react-redux';
const GamePage = ({cards, changeCardColor}) => {
    // const currentPlayer = turn === "PLAYER_ONE" ? playerOne : playerTwo; 
    //check turns and set the current player accordingly possibly by dispatching turns
    //when you dispatch, entire component re renders and you change the turns key
    //pass current player to <Game> as a prop
    console.log("render");
    return (<Game cards={cards} changeCardColor={changeCardColor}/>);
};
const mapStateToProps = state => ({cards: state.cards, playerOne: state.playerOne, playerTwo: state.playerTwo});
const mapDispatchToProps = dispatch => ({changeCardColor: (id, color) => dispatch(changeCardColor(id, color))});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

