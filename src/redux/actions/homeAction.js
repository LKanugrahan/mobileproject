import axios from 'axios';

let base = 'https://easy-pear-parrot-gown.cyclic.cloud/'
export const getCategory = () => async (dispatch, getState) => {
  try {
    dispatch({type: 'CATEGORY_REQUEST'});
    const result = await axios.get(
      `${base}category`);
    dispatch({type: 'CATEGORY_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'CATEGORY_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};