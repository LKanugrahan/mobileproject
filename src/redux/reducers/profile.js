const InitialState = {
  data: null,
  isLoading: false,
  isError: false,
  messageError: '',
  isSuccess: false,
};

export const profileReducer = (state = InitialState, {type, payload}) => {
  switch (type) {
    case 'PROFILE_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'DETAIL_PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        messageError: '',
      };
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        messageError: '',
      };
    case 'PROFILE_ERROR':
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

export default profileReducer;
