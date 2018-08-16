import { combineReducers  } from 'redux';
import cards from './cards';
import {playerOne, playerTwo} from './player';

const rootReducer = combineReducers({cards, playerOne, playerTwo});
export default rootReducer;
