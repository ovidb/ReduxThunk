import { combineReducers } from 'redux';
import UsersReducers from './users-reducer';

const rootReducer = combineReducers({
  users: UsersReducers,
});

export default rootReducer;
