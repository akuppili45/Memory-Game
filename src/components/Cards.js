import React, { Component } from 'react';

class Cards extends Component{
    render(){
        const { cards, cardOne, flipFirstCard, turn, playerOne, playerTwo, flipSecondCard } = this.props;
        // console.log(cardOne);
       const currentPlayer = turn === "PLAYER_ONE" ? playerOne : playerTwo;
       const newPlayer = turn !== "PLAYER_ONE" ? "PLAYER_ONE" : "PLAYER_TWO";
    //    console.log(currentPlayer);
    
        const cardButtons = cards.map(card => {
            return (
                <button key={card.id}style={{
                backgroundColor: card.currentColor,
                width: '75px',
                height: '75px',
                margin: '15px',
                border: '3px solid black'}} onClick={(e) => {
                    e.preventDefault();
                    // console.log(cardOne);
                    if(!cardOne.id){
                        flipFirstCard(card, card.color);
                    }
                    else{
                        flipSecondCard(cardOne, card, card.color, currentPlayer, newPlayer);
                    }
                        
                    
                    
                    // const color = card.currentColor === "white" ? card.color : "white";
                    // if(card.currentColor === "white"){
                    //     // changeCardColor(card, card.color); //This is the call that needs to be conditioned because it is heavily being repeated.
                    //     // changeCardColorAndAddToCardOne(card, card.color);
                    // }
                    // else{
                    //     // secondCardAndSwitchTurn(cardOne, card); //Actions: Change color of second card, wait 5 milliseconds and change both cards to white and then switchTurn
                    // }
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


