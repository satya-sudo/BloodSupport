import _ from 'lodash';
const supportReducer = (state = {},action) =>{
    switch (action.type){
        case 'FETCH_ALL':
            return  _.mapKeys(action.payload,'id')
        case 'FETCH_SEARCH':
            console.log( _.mapKeys(action.payload,'id'))
            return _.mapKeys(action.payload,'id')
        default: 
            return state;

    }
};

export default supportReducer