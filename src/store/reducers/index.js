import { combineReducers  } from 'redux';
import cards from './cards';
import player from './player';
const playerOne = player;
const playerTwo = player;
const rootReducer = combineReducers({cards, playerOne, playerTwo});
export default rootReducer;
