import { combineReducers } from 'redux';

import ReducerItem from '../reducers/reducer_item'

const rootReducer = combineReducers({
  item : ReducerItem
});

export default rootReducer;