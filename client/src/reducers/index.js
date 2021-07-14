import supportReducer from './supportReducer';
import { combineReducers } from 'redux'

export default combineReducers({
    bloodSupport : supportReducer
});
