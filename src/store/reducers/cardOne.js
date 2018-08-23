import { CHANGE_CARD_ONE } from "../actionTypes";
export const cardOne = (state={}, action) => {
    switch(action.type){
        case CHANGE_CARD_ONE:
            return action.card;
        default: return state;
    }
}
