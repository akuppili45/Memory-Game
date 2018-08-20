import { combineReducers  } from 'redux';
import cards from './cards';
//playerOne: {matches: 0, cardOne: :cardId, cardTwo: :secondCardId}
//clear each time by dispatching and changing the state
//playerTwo: {matches: 0, cardOne: :cardId, cardTwo: :secondCardId}
//clear each time by dispatching and changing the state
//turn: "PLAYER_ONE" also need to switch by dispatching
const rootReducer = combineReducers({cards});
export default rootReducer;
