import { CHANGE_CARD_COLOR, CHANGE_CARD_ONE, ADD_POINT } from '../actionTypes';
import { SWITCH_TURN } from '../actionTypes';
export const changeCardColor = (id, color) => ({type: CHANGE_CARD_COLOR, id, color}); 
export const switchTurn = playerString => ({type: SWITCH_TURN, playerString});

// export const changeTwoCards = (id1, id2, color) => (dispatch => {
//     dispatch(changeCardColor(id1, color));
//     dispatch(changeCardColor(id2, color));
// });
export const setCardOne = card => ({type: CHANGE_CARD_ONE, card});

export const flipFirstCard = (card, color) => (dispatch => {
    dispatch(changeCardColor(card.id, color));
    dispatch(setCardOne(card));
    // console.log("first");
});

export const addMatch = player => ({type: ADD_POINT, player});

export const flipSecondCard = (card1, card2, secondCardColor, currentPlayerObj, newPlayerString) => (dispatch => {
    // console.log("HELLOflibsecond")
    dispatch(changeCardColor(card2.id, secondCardColor));
    setTimeout(() => {
        dispatch(changeCardColor(card1.id, "white"));
        dispatch(changeCardColor(card2.id, "white"));
        dispatch(setCardOne({}));
        dispatch(switchTurn(newPlayerString));
    }, 5000);
    if(card1.color === card2.color){
        dispatch(addMatch(currentPlayerObj));
    }
});
// export const flipSecondCard = (card1, card2, secondCardColor, currentPlayerObj, newPlayerString) => {console.log("HELLO")}

