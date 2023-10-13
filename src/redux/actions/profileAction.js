import axios from 'axios';
// import {API_URL} from '@env'

let API_URL = 'https://dark-rose-chinchilla-veil.cyclic.cloud/'
export const getProfileDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'PROFILE_REQUEST'});
    const result = await axios.get(`${API_URL}auth/${id}`, {
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
    const result = await axios.put(`${API_URL}auth/${id}`, data, {
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
