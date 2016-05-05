'use strict';

import { combineReducers } from 'redux';
import boardReducer from './reducers_board';

const rootReducer = combineReducers({
  board: boardReducer
});

export default rootReducer;
