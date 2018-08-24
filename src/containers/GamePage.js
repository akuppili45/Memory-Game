import React from 'react';
import {flipFirstCard, flipSecondCard} from '../store/actions';
import { connect } from 'react-redux';
import Cards from "../components/Cards";
const GamePage = ({cards, turn, flipFirstCard, flipSecondCard, playerOne, playerTwo, cardOne}) => 
    (
        <div>
            <Cards 
                cards={cards} 
                flipFirstCard={flipFirstCard} 
                playerOne={playerOne} 
                playerTwo={playerTwo}
                cardOne={cardOne} 
                turn={turn}
                flipSecondCard={flipSecondCard}/>
            <div style={{display:"flex"}}>
                <div style={{paddingLeft: "20%"}}>
                    <h2>Player One</h2>
                    <h3>{playerOne.matches}</h3>
                </div>
                <div style={{paddingLeft: "45%"}}>
                    <h2 style={{}}>Player Two</h2>
                    <h3>{playerTwo.matches}</h3>
                </div>
            </div>
        </div>
    );

const mapStateToProps = state => ({
    cards: state.cards, 
    playerOne: state.playerOne, 
    playerTwo: state.playerTwo, 
    cardOne: state.cardOne,
    turn: state.turn
});
const mapDispatchToProps = dispatch => ({flipFirstCard: (card, color) => dispatch(flipFirstCard(card, color)), flipSecondCard: (card1, card2, secondCardColor, currentPlayerObj, newPlayerString) => dispatch(flipSecondCard(card1, card2, secondCardColor, currentPlayerObj, newPlayerString))});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

