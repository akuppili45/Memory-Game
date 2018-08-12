import React, { Component } from 'react';


class Cards extends Component{
    render(){
        const { cards, changeCardColor } = this.props;
        let clickedCard = {};
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
                    changeCardColor(card.id, color);
                    
                    


                }}>
                </button>
            );

        });
        return (
            <div style={{width: "60%", paddingLeft: "20%"}}>
                {cardButtons}
            </div>
        );
    }
}
export default Cards;


