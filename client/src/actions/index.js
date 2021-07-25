import bloodSupportApi from "../Api/bloodSupportApi";

export const getAll = () => async dispatch => {

    const response = await bloodSupportApi.get('/getall');
    console.log(response.data)
    dispatch({
        type: "FETCH_ALL",payload:response.data
    });
};


export const getSearched = (params=null) => async dispatch => {

    let response;
    if (params === null){
        response = await bloodSupportApi.get('/getall');
    } else {
        response = await bloodSupportApi.get('/search',params);
    }
    

    dispatch(
        {
            type: "FETCH_ALL",payload:response.data
        }
    )
}