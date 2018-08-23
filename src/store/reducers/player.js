import { ADD_POINT_P1, ADD_POINT_P2 } from "../actionTypes";
export const playerOne = (state={name: "PLAYER_ONE", matches:0}, action) => {
    switch(action.type){
        case ADD_POINT_P1:
            return {...state, matches: action.player.matches + 1}
        default: return state;
    }
}
export const playerTwo = (state={name: "PLAYER_TWO", matches:0}, action) => {
    switch(action.type){
        case ADD_POINT_P2:
            return {...state, matches: action.player.matches + 1}
        default: return state;
    }
}
