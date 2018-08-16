import { SWITCH_TURN } from "../actionTypes";
export const playerOne = (state={cardsClicked:[], matches: 0, turn: true}, action) => {
    switch(action.type){
        case SWITCH_TURN:
            return {...action.player, turn: !action.player.turn}
        default: return state
    }
}
export const playerTwo = (state={cardsClicked:[], matches: 0, turn: false}, action) => {
    switch(action.type){
        case SWITCH_TURN:
            return {...action.player, turn: !action.player.turn}
        default: return state
    }
}
