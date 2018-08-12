import React, { Component } from 'react';


class Cards extends Component{
    render(){
        const { cards } = this.props;
        const cardButtons = cards.map(card => {
            return (
                <button key={card.id}style={{
                backgroundColor: card.currentColor,
                width: '75px',
                height: '75px',
                margin: '15px',
                border: '3px solid black'}} onClick>
                </button>
            );

        });
       console.log(cards);
        return (
            <div style={{width: "60%", paddingLeft: "20%"}}>
                {cardButtons}
            </div>
        );
    }
}
export default Cards;


