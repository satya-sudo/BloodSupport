import _ from 'lodash';
const supportReducer = (state = {},action) =>{
    switch (action.type){
        case 'FETCH_ALL':
            return {...state,..._.mapKeys(action.payload,'id')}
        case 'FETCH_SEARCH':
            return {...state,..._.mapKeys(action.payload,'id')}
        default: 
            return state;

    }
};

export default supportReducer