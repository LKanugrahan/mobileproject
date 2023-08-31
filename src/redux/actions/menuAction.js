import axios from 'axios';

export const getMenuDetail = id => async (dispatch, getState) => {
  try {
    const {token} = getState().loginReducer.data.token
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    dispatch({type: 'DETAIL_MENU_REQUEST'});
    const result = await axios.get(
      `https://teal-faithful-llama.cyclic.app/recipe/mobile/${id}`,
      {headers},
    );
    dispatch({type: 'DETAIL_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'DETAIL_MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const deleteMenu = id => 
    async (dispatch) => {
        try{
            const {token} = getState().loginReducer.data.token
            let headers = {
              Authorization: `Bearer ${token}`,
            };
            dispatch({type:"DELETE_MENU_REQUEST"})
            const result = await axios.delete(`https://teal-faithful-llama.cyclic.app/recipe/${id}`,{headers})
            console.log(result)
            dispatch({type:"DELETE_MENU_SUCCESS",payload:result.data})
        } catch(err){
            console.log("error")
            dispatch({type:"DELETE_MENU_ERROR",payload:err.response.data.message})
            console.log(err)
        }
    }
