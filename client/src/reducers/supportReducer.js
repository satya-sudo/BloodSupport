const supportReducer = (state = {},action) =>{
    switch (action.type){
        case 'FETCH_ALL':
            return {...state,fetchAll:action.payload}
        case 'FETCH_SEARCH':
            return {...state,fetchSearch:action.payload}
        default: 
            return state;

    }
};

export default supportReducer