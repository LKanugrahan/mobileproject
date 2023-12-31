const InitialState = {
    data: null,
    isLoading: false,
    isError:false,
    messageError:'',
    isSuccess:false
}

const registerReducer = (state= InitialState,{type,payload}) => {
    switch(type){
        case "REGISTER_REQUEST":
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case "REGISTER_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                data:payload.data,
                messageError:''
            }
        case "REGISTER_ERROR":
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

export default registerReducer