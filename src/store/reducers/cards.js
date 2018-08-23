import {CHANGE_CARD_COLOR} from '../actionTypes';
import shuffle  from 'shuffle-array';

let defaultCards = [
    {id: 0, color: 'red', currentColor: 'white'},
    {id: 1, color: 'red', currentColor: 'white'},
    {id: 2, color: 'blue', currentColor: 'white'},
    {id: 3, color: 'blue', currentColor: 'white'},
    {id: 4, color: 'green', currentColor: 'white'},
    {id: 5, color: 'green', currentColor: 'white'},
    {id: 6, color: 'purple', currentColor: 'white'},
    {id: 7, color: 'purple', currentColor: 'white'},
    {id: 8, color: 'pink', currentColor: 'white'},
    {id: 9, color: 'pink', currentColor: 'white'},
    {id: 10, color: 'brown', currentColor: 'white'},
    {id: 11, color: 'brown', currentColor: 'white'},
    {id: 12, color: 'orange', currentColor: 'white'},
    {id: 13, color: 'orange', currentColor: 'white'},
    {id: 14, color: 'black', currentColor: 'white'},
    {id: 15, color: 'black', currentColor: 'white'}
];
defaultCards = shuffle(defaultCards);

const cards = (state=defaultCards, action) => {
    switch(action.type){
        case CHANGE_CARD_COLOR:
            return state.map(card => card.id === action.id ? {...card, currentColor: action.color} : card);
        default: return state;
    }
}

export default cards;


