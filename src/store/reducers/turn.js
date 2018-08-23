import { SWITCH_TURN } from '../actionTypes';

export const turn = (state="PLAYER_ONE", action) => {
    switch(action.type){
        case SWITCH_TURN:
            return action.playerString;
        default: return state;
    }
}

