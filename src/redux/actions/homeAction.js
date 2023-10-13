import axios from 'axios';
// import {API_URL} from '@env'

let API_URL = 'https://dark-rose-chinchilla-veil.cyclic.cloud/'

export const getCategory = () => async (dispatch, getState) => {
  try {
    dispatch({type: 'CATEGORY_REQUEST'});
    const result = await axios.get(
      `${API_URL}category`);
    dispatch({type: 'CATEGORY_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'CATEGORY_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};