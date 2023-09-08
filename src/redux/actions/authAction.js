import axios from 'axios';

let base = 'https://easy-pear-parrot-gown.cyclic.cloud/'

export const registAction = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'REGISTER_REQUEST'});
    const result = await axios.post(
      `${base}auth/register`,
      data,
    );
    console.log('result data ', result.data);
    result.data && dispatch({type: 'REGISTER_SUCCESS', payload: result.data});
    result.data && console.log('success');
  } catch (err) {
    console.log('err');
    console.log(err.response.data.message);
    dispatch({type: 'REGISTER_ERROR', payload: err.response.data.message});
  }
};

export const loginAction = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'AUTH_REQUEST'});
    const result = await axios.post(
      `${base}auth/login`,
      data,
    );
    console.log('result data ', result.data);
    result.data && dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
    result.data && console.log('success');
  } catch (err) {
    console.log('err');
    console.log(err.response.data.message);
    dispatch({type: 'AUTH_ERROR', payload: err.response.data.message});
  }
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_TOKEN'});
  };
};

export const getProfileDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'AUTH_REQUEST'});
    const result = await axios.get(`${base}auth/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'DETAIL_PROFILE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'AUTH_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const updateProfileDetail = (id, data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'AUTH_REQUEST'});
    const result = await axios.put(`${base}auth/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',

        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'UPDATE_PROFILE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'AUTH_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

