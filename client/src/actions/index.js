import bloodSupportApi from "../Api/bloodSupportApi";

export const getAll = () => async dispatch => {

    const response = await bloodSupportApi.get('/getall');
    console.log(response.data)
    dispatch({
        type: "FETCH_ALL",payload:response.data
    });
};


