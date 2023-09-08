const InitialState = {
  data: null,
  isLoading: false,
  isError: false,
  messageError: '',
  isSuccess: false,
};

export const menuReducer = (state = InitialState, {type, payload}) => {
  switch (type) {
    case 'MENU_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'POST_MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        messageError: '',
      };
    case 'PUT_MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        messageError: '',
      };
    case 'DETAIL_RECIPE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        messageError: '',
      };
    case 'DELETE_MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload,
        messageError: '',
      };
    case 'MENU_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        messageError: payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
