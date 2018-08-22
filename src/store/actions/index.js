import { CHANGE_CARD_COLOR } from '../actionTypes';
import { SWITCH_TURN } from '../actionTypes';
export const changeCardColor = (id, color) => ({type: CHANGE_CARD_COLOR, id, color}); 
export const switchTurn = playerString => ({type: SWITCH_TURN, playerString});
