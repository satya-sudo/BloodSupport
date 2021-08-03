import _ from 'lodash';
const supportReducer = (state = {},action) =>{
    switch (action.type){
        case 'ADD_DONOR' :
            return action.payload
        default: 
            return state;

    }
};

export default supportReducer