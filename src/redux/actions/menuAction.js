import axios from 'axios';

let base = 'https://easy-pear-parrot-gown.cyclic.cloud/';

export const getMenuDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'DETAIL_MENU_REQUEST'});
    const result = await axios.get(`${base}recipe/mobile/${id}`, {
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
    const result = await axios.delete(`${base}recipe/${id}`, {
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

export const addMenu = (data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'MENU_REQUEST'});
    const result = await axios.post(`${base}recipe`, data, {
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

export const updateMenu = (id,data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'MENU_REQUEST'});
    const result = await axios.put(`${base}recipe/${id}`, data, {
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
    const result = await axios.get(`${base}recipe/${id}`);
    dispatch({type: 'DETAIL_RECIPE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const getRecipeSearch = (limit, search ) => async (dispatch, getState) => {
  try {
    dispatch({type: 'SEARCH_MENU_REQUEST'});
    const result = await axios.get(`${base}recipe/detail?search=${search}&limit=${limit}`);
    dispatch({type: 'SEARCH_MENU_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'SEARCH_MENU_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};
