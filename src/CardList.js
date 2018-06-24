import React, {Component} from 'react';
import Card from './Card';
import shuffle from 'shuffle-array';
import update from 'react-addons-update';
const CardState = {
    SHOW: 0,
    HIDE: 1,
    MATCHING: 2
}
class CardList extends Component{

    constructor(props){
        super(props);
        const cardArray = [
            {id: 0, show: CardState.HIDE, onClickable: true, color: 'red', currentColor: 'white'},
            {id: 1, show: CardState.HIDE, onClickable: true, color: 'red', currentColor: 'white'},
            {id: 2, show: CardState.HIDE, onClickable: true, color: 'blue', currentColor: 'white'},
            {id: 3, show: CardState.HIDE, onClickable: true, color: 'blue', currentColor: 'white'},
            {id: 4, show: CardState.HIDE, onClickable: true, color: 'green', currentColor: 'white'},
            {id: 5, show: CardState.HIDE, onClickable: true, color: 'green', currentColor: 'white'},
            {id: 6, show: CardState.HIDE, onClickable: true, color: 'purple', currentColor: 'white'},
            {id: 7, show: CardState.HIDE, onClickable: true, color: 'purple', currentColor: 'white'},
            {id: 8, show: CardState.HIDE, onClickable: true, color: 'pink', currentColor: 'white'},
            {id: 9, show: CardState.HIDE, onClickable: true, color: 'pink', currentColor: 'white'},
            {id: 10, show: CardState.HIDE, onClickable: true, color: 'brown', currentColor: 'white'},
            {id: 11, show: CardState.HIDE, onClickable: true, color: 'brown', currentColor: 'white'},
            {id: 12, show: CardState.HIDE, onClickable: true, color: 'orange', currentColor: 'white'},
            {id: 13, show: CardState.HIDE, onClickable: true, color: 'orange', currentColor: 'white'},
            {id: 14, show: CardState.HIDE, onClickable: true, color: 'black', currentColor: 'white'},
            {id: 15, show: CardState.HIDE, onClickable: true, color: 'black', currentColor: 'white'},
        ]
        this.state = {
            cards: shuffle(cardArray)
        }
    }
    getRandomColor(){
        //make it 8 colors first then change it up
        const colorArray = ['red', 'blue', 'green', 'purple', 'orange', 
          'black', 'pink', 'brown', 'red', 'blue', 'green', 'purple', 'orange', 
          'black', 'pink', 'brown'];
        //two cards should have the same color, no more, no less
        const randomIndex = Math.floor(Math.random() * colorArray.length);
        //return colorArray[randomIndex];
        return colorArray;
        
    }  
    //Flips the card
    flipCard(index){
        let finalState = {cards: []};
        const newStateObj = update(this.state.cards[index], {currentColor: {$set: this.state.cards[index].color}, show: {$set: CardState.SHOW}});
        const newStateArr = update(this.state.cards, {$splice: [[index, 1, newStateObj]]});
        const newObj = {cards: newStateArr};
        if(this.state.cards[index].show === CardState.HIDE){
            finalState = newObj;
        }
        else if(this.state.cards[index].show != CardState.MATCHING){
            finalState = this.flipCardBack(index)
        }
        return finalState;
    }

    flipCardBack(index){
        const newStateObj = update(this.state.cards[index], {currentColor: {$set: 'white'}, show: {$set: CardState.HIDE}});
        const newStateArr = update(this.state.cards, {$splice: [[index, 1, newStateObj]]});
        const newObj = {cards: newStateArr};
        return newObj;
    }

    flipTwoCardsBack(index1, index2){
        const newStateObj1 = update(this.state.cards[index1], {currentColor: {$set: 'white'}, show: {$set: CardState.HIDE}});
        let newStateArr = update(this.state.cards, {$splice: [[index1, 1, newStateObj1]]});

        const newStateObj2 = update(newStateArr[index2], {currentColor: {$set: 'white'}, show: {$set: CardState.HIDE}});
        newStateArr = update(newStateArr, {$splice: [[index2, 1, newStateObj2]]});
        
        const newObj = {cards: newStateArr};
        return newObj;
    }

    changeShowToMatch(index1, index2){
        //if(this.state.cards[index].show === CardState.SHOW && this.state.cards[index].onClickable){
        const newStateObj = update(this.state.cards[index1], {onClickable: {$set: false}, show: {$set: CardState.MATCHING}});
        let newStateArr = update(this.state.cards, {$splice: [[index1, 1, newStateObj]]});

        const newStateObj2 = update(this.state.cards[index2], {onClickable: {$set: false}, show: {$set: CardState.MATCHING}});
        newStateArr = update(newStateArr, {$splice: [[index2, 1, newStateObj2]]});
        const newObj = {cards: newStateArr};
        return newObj;
        //}
    }
    
    clearArray(arr){
        while(arr.length != 0){
            arr.pop();
        }
        return arr;
    }
    render(){
        const numBoxes = 16;
        // const boxes = Array(numBoxes).fill().map((color, index) =>(
        //     <Card key={index}color={this.getRandomColor()}/>
        // ));  
        // const boxes = Array(numBoxes).fill().map((color, index) =>(
        //     // <Card key={index}color={this.getRandomColor()[index]}/>
        //     console.log(`${index} ${this.getRandomColor()[index]}`)    this is shuffling multiple times so it is repeating when shuffle is called in getRandomColor()
        // ));
        const shuffledArray = shuffle(this.getRandomColor());
        console.log(this.state.cards);
        const boxes = Array(numBoxes).fill().map((card, index) =>{ //map with braces u need to have a return statement
        //    return <Card key={index}color={shuffledArray[index]}/>
              
              return(
                  
                  <button key={index} style={ {
                //   backgroundColor: `${this.state.cards[index].color}`,
                backgroundColor: `${this.state.cards[index].currentColor}`,
                  width: '75px',
                  height: '75px',
                  margin: '15px',
                  border: '3px solid black'}} onClick={()=>{
                    let newState = {cards: []};
                    newState = this.flipCard(index);
                    let showedCards = this.state.cards.filter((e) => e.show === CardState.SHOW);
                    if(showedCards.length === 2 && showedCards[0].color != showedCards[1].color){
                        console.log(showedCards);
                        const firstIndex = this.state.cards.indexOf(showedCards[0]);
                        const secondIndex = this.state.cards.indexOf(showedCards[1]);
                        newState = this.flipTwoCardsBack(firstIndex,secondIndex);
                        showedCards = this.clearArray(showedCards);
                        console.log(`${firstIndex} ${secondIndex}`);
                        
                    }
                     if(showedCards.length === 2 && showedCards[0].color === showedCards[1].color){
                        const firstIndex = this.state.cards.indexOf(showedCards[0]);
                        const secondIndex = this.state.cards.indexOf(showedCards[1]);
                        newState = this.changeShowToMatch(firstIndex, secondIndex);
                        showedCards = this.clearArray(showedCards);
                    }
                    
                    this.setState(newState);
                  }}></button>
                  
              );
        });
        return(
            <div>
                <div style={{display: 'flex'}}>
                    {boxes}
                </div>
                <button onClick={()=> this.flipTwoCardsBack(3, 4)}> Submit </button>
                
            </div>
        );
    }
    
}
export default CardList;


                      
                    // const revealedStateCards = this.state.cards.filter((e) => e.show == CardState.SHOW);
                    // let newState = {cards: []};
                    // if(revealedStateCards.length === 2 && revealedStateCards[0].currentColor != revealedStateCards[1].currentColor){
                    //     console.log(revealedStateCards);
                    //     const firstShowCardIndex = this.state.cards.indexOf(revealedStateCards[0]);
                    //     const secondShowCardIndex = this.state.cards.indexOf(revealedStateCards[1]);

                    //     const dummyObject = update(this.state.cards[firstShowCardIndex], {currentColor: {$set: 'white'}, show: {$set: CardState.HIDE}});
                    //     //console.log(dummyObject);
                    //     const dummyArray = update(this.state.cards, {$splice: [[firstShowCardIndex, 1, dummyObject]]});
                    //     //console.log(dummyArray);

                    //     const dummyObject2 = update(dummyArray[secondShowCardIndex], {currentColor: {$set: 'white'}, show: {$set: CardState.HIDE}});
                    //     //console.log(dummyObject2);
                    //     const dummyArray2 = update(dummyArray, {$splice: [[secondShowCardIndex, 1, dummyObject2]]});
                    //     //console.log(dummyArray2);
                    //     newState = {cards: dummyArray2};
                    // }
                    // // const currentCard = this.state.cards[index];
                    
                    // // const clickedState = update(this.state.cards, {$splice: [[index,1,update(currentCard,{currentColor: {$set: currentCard.color}, show: {$set: CardState.SHOW}})]]});
                    // // if(currentCard.show === CardState.HIDE){
                    // //     newState = {cards: clickedState};
                    // // }


                    // this.setState(newState);

