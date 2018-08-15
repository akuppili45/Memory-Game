import { SWITCH_TURN } from "../actionTypes";
const player = (state={cardsClicked:[], matches: 0, turn: false}, action) => {
    switch(action.type){
        case SWITCH_TURN:
            return {...action.player, turn: !state.turn}
        default: return state
    }
}
export default player;
