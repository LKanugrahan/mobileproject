const InitialState = {
    data: null,
    isLoading: false,
    isError:false,
    messageError:'',
    isSuccess:false
}

export const postMenuReducer = (state= InitialState,{type,payload}) => {
    switch(type){
        case "POST_MENU_REQUEST":
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case "POST_MENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                data:payload.users,
                messageError:''
            }
        case "POST_MENU_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
                isSuccess:false,
                messageError:payload
            }
        default:
            return state
    }
}

export default postMenuReducer