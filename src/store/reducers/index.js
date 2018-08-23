import { combineReducers  } from 'redux';
import cards from './cards';
import { cardOne } from "./cardOne";
import { playerOne, playerTwo } from './player';
import { turn } from './turn';

const rootReducer = combineReducers({cards, playerOne, playerTwo, cardOne, turn});
export default rootReducer;
