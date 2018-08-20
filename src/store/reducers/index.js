import { combineReducers  } from 'redux';
import cards from './cards';
// import {playerOne, playerTwo} from './player';

const rootReducer = combineReducers({cards});
export default rootReducer;
