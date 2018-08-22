import { CHANGE_CARD_COLOR } from '../actionTypes';
import { SWITCH_TURN } from '../actionTypes';
export const changeCardColor = (id, color) => ({type: CHANGE_CARD_COLOR, id, color}); 
export const switchTurn = playerString => ({type: SWITCH_TURN, playerString});

export const changeTwoCards = (id1, id2, color) => (dispatch => {
    dispatch(changeCardColor(id1, color));
    dispatch(changeCardColor(id2, color));
});


