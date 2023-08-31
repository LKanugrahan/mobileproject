const InitialState = {
    data: null,
    isLoading: false,
    isError:false,
    messageError:'',
    isSuccess:false
}

const loginReducer = (state= InitialState,{type,payload}) => {
    switch(type){
        case "LOGIN_REQUEST":
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case "LOGIN_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                data:payload.users,
                messageError:''
            }
        case "LOGIN_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
                isSuccess:false,
                messageError:payload
            }
        case "DELETE_TOKEN":
            return{
                ...state,
                data:null,
                isLoading:false,
                isError:false,
                isSuccess:false,
            }
        default:
            return state
    }
}

export default loginReducer