import React, { Component } from 'react';


class Cards extends Component{
    render(){
        const { cards, changeCardColor, playerOne, playerTwo, switchTurn } = this.props;
        const currentPlayer = playerOne.turn ? {...playerOne, name:"Player One"} : {...playerTwo, name: "Player Two"}; //default playerOne
        console.log(currentPlayer);
        if(currentPlayer.cardsClicked.length === 2){
            //dispatch switch turn which calls render function again
            // switchTurn(playerOne);
            while(currentPlayer.cardsClicked.length > 0){
                currentPlayer.cardsClicked.pop();
            }
            switchTurn(playerTwo);
        }
        const cardButtons = cards.map(card => {
            return (
                <button key={card.id}style={{
                backgroundColor: card.currentColor,
                width: '75px',
                height: '75px',
                margin: '15px',
                border: '3px solid black'}} onClick={(e) => {
                    e.preventDefault();
                    //Flip Card
                    const color = card.currentColor === "white" ? card.color : "white";
                    currentPlayer.cardsClicked.push(card);
                    changeCardColor(card.id, color);
                    
                    


                }}>
                </button>
            );

        });
        return (
            <div style={{width: "60%", paddingLeft: "20%"}}>
                {cardButtons}
                <div>{currentPlayer.name}</div>
            </div>
        );
    }
}
export default Cards;


