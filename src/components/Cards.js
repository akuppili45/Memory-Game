import React, { Component } from 'react';

class Cards extends Component{
    render(){
        const { cards, cardOne, flipFirstCard, turn, playerOne, playerTwo, flipSecondCard } = this.props;
        // console.log(cardOne);
       const currentPlayer = turn === "PLAYER_ONE" ? playerOne : playerTwo;
       const newPlayer = turn !== "PLAYER_ONE" ? "PLAYER_ONE" : "PLAYER_TWO";
       const cardButtons = cards.map(card => {
            return (
                <button key={card.id}style={{
                backgroundColor: card.currentColor,
                width: '75px',
                height: '75px',
                margin: '15px',
                border: '3px solid black'}} onClick={(e) => {
                    e.preventDefault();
                    if(!cardOne.color){ //BUG REVELATION: !cardOne.id is true if cardOne.id is 0.
                        flipFirstCard(card, card.color);
                    }
                    else{
                        flipSecondCard(cardOne, card, card.color, currentPlayer, newPlayer);
                    }
                }}>
                </button>
            );

        });
        return (
            <div style={{width: "60%", paddingLeft: "20%"}}>
                {cardButtons}
                <div>{turn}</div>
            </div>
        );
    }
}
export default Cards;


