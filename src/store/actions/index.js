import { CHANGE_CARD_COLOR, CHANGE_CARD_ONE, ADD_POINT_P1, ADD_POINT_P2 } from '../actionTypes';
import { SWITCH_TURN } from '../actionTypes';
export const changeCardColor = (id, color) => ({type: CHANGE_CARD_COLOR, id, color}); 
export const switchTurn = playerString => ({type: SWITCH_TURN, playerString});
export const setCardOne = card => ({type: CHANGE_CARD_ONE, card});

export const flipFirstCard = (card, color) => (dispatch => { //sometimes dispatch won't call because you haven't put in your props properly.
    dispatch(changeCardColor(card.id, color));
    dispatch(setCardOne(card));
});

export const addMatch = player => {
    let aType = "";
    // if(player.name === ADD_POINT_P1){ wrong
    if(player.name === "PLAYER_ONE"){
        aType = ADD_POINT_P1;
    }
    else{
        aType = ADD_POINT_P2;
    }
    return {type: aType, player};
}

export const flipSecondCard = (card1, card2, secondCardColor, currentPlayerObj, newPlayerString) => (dispatch => {
    dispatch(changeCardColor(card2.id, secondCardColor));
    setTimeout(() => {
        if(card1.color !== card2.color){
            dispatch(changeCardColor(card1.id, "white"));
            dispatch(changeCardColor(card2.id, "white"));
        }
        else{
            dispatch(addMatch(currentPlayerObj));
        }
        dispatch(setCardOne({}));
        dispatch(switchTurn(newPlayerString));
    }, 500);
});

