
import axios from 'axios';

export const loginAction = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'LOGIN_REQUEST'});
    const result = await axios.post(
      `https://teal-faithful-llama.cyclic.app/auth/login`,
      data,
    );
    console.log('result data ', result.data);
    result.data && dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
    result.data && console.log('success');
  } catch (err) {
    console.log('err');
    console.log(err.response.data.message);
    dispatch({type: 'LOGIN_ERROR', payload: err.response.data.message});
  }
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_TOKEN'});
  };
};
