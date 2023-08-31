const InitialState = {
    data: null,
    isLoading: false,
    isError:false,
    messageError:'',
    isSuccess:false
}

export const detailMenuReducer = (state= InitialState,{type,payload}) => {
    switch(type){
        case "DETAIL_MENU_REQUEST":
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case "DETAIL_MENU_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                data:payload.data,
                messageError:''
            }
        case "DETAIL_MENU_ERROR":
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

export default detailMenuReducer