import axios from 'axios';
// import {API_URL} from '@env'

let API_URL = 'https://dark-rose-chinchilla-veil.cyclic.cloud/';
export const getMenuDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'DETAIL_MENU_REQUEST'});
    const result = await axios.get(`${API_URL}recipe/mobile/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'DETAIL_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'DETAIL_MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const deleteMenu = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'MENU_REQUEST'});
    const result = await axios.delete(`${API_URL}recipe/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    console.log(result);
    dispatch({type: 'DELETE_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const addMenu = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'MENU_REQUEST'});
    const result = await axios.post(`${API_URL}recipe`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',

        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'POST_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const updateMenu = (id, data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'MENU_REQUEST'});
    const result = await axios.put(`${API_URL}recipe/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',

        Authorization: `Bearer ${getState().authReducer.data.token}`,
      },
    });
    dispatch({type: 'PUT_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const getRecipeDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'MENU_REQUEST'});
    const result = await axios.get(`${API_URL}recipe/${id}`);
    dispatch({type: 'DETAIL_RECIPE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const getRecipeSearch =
  (limit, search, page, offset) => async (dispatch, getState) => {
    try {
      dispatch({type: 'SEARCH_MENU_REQUEST'});
      const result = await axios.get(
        `${API_URL}recipe/detail?search=${search}&limit=${limit}&page=${page}&offset=${offset}`,
      );
      dispatch({type: 'SEARCH_MENU_SUCCESS', payload: result.data});
    } catch (err) {
      console.log('error');
      dispatch({type: 'SEARCH_MENU_ERROR', payload: err.response.data.message});
      console.log(err);
    }
  };

export const searchMenu = () => async dispatch => {
  try {
    console.log('tes');
    dispatch({type: 'SEARCH_MENU_REQUEST'});
    const result = await axios.get(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/recipe`,
    );
    console.log('data');
    console.log(result);
    dispatch({type: 'SEARCH_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({
      type: 'SEARCH_MENU_ERROR',
      payload: err.response.data.message,
    });
    console.log(err);
  }
};
