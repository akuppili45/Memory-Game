import { combineReducers  } from 'redux';
import cards from './cards';
import { cardOne } from "./cardOne";
import { playerOne, playerTwo } from './player';
import { turn } from './turn';
//playerOne: {matches: 0, cardOne: :cardId, cardTwo: :secondCardId}
//clear each time by dispatching and changing the state
//playerTwo: {matches: 0, cardOne: :cardId, cardTwo: :secondCardId}
//clear each time by dispatching and changing the state
//turn: "PLAYER_ONE" also need to switch by dispatching
const rootReducer = combineReducers({cards, playerOne, playerTwo, cardOne, turn});
export default rootReducer;
