import axios from 'axios';

let base = 'https://easy-pear-parrot-gown.cyclic.cloud/';

export const getProfileDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'PROFILE_REQUEST'});
    const result = await axios.get(`${base}auth/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'DETAIL_PROFILE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'PROFILE_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const updateProfileDetail = (id, data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'PROFILE_REQUEST'});
    const result = await axios.put(`${base}auth/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',

        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'UPDATE_PROFILE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'PROFILE_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};
