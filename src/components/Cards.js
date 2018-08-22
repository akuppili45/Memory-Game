import React, { Component } from 'react';


class Cards extends Component{
    render(){
        const { cards, changeCardColor } = this.props;
        // console.log(currentPlayer);
        // console.log(cardsClicked);
       //logic for if currentPlayer.cardOne && currentPlayer.cardTwo
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
                    changeCardColor(card.id, color); //This is the call that needs to be conditioned because it is heavily being repeated.
                }}>
                </button>
            );

        });
        return (
            <div style={{width: "60%", paddingLeft: "20%"}}>
                {cardButtons}
                <div></div>
            </div>
        );
    }
}
export default Cards;


