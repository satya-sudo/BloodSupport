import supportReducer from './supportReducer';
import addDonorReducer from './addDonorReducer';
import { combineReducers } from 'redux'


export default combineReducers({
    bloodSupport : supportReducer,
    addDoner: addDonorReducer
});
