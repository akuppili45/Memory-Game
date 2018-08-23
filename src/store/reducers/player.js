import { ADD_POINT } from "../actionTypes";
export const playerOne = (state={name: "PLAYER_ONE", matches:0}, action) => {
    switch(action.type){
        case ADD_POINT:
            return {...state, matches: state.matches + 1}
        default: return state;
    }
}
export const playerTwo = (state={name: "PLAYER_TWO", matches:0}, action) => {
    switch(action.type){
        case ADD_POINT:
            return {...state, matches: state.matches + 1}
        default: return state;
    }
}
