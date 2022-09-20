import { combineReducers } from 'redux';
import question from './questionReducer';
import report from './reportReducer';

const rootReducer = combineReducers({
  question, report
});

export default rootReducer;
