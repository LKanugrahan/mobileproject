const InitialState = {
    categoryData: null,
    isLoading: false,
    isError:false,
    messageError:'',
    isSuccess:false
}

export const categoryReducer = (state= InitialState,{type,payload}) => {
    switch(type){
        case "CATEGORY_REQUEST":
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case "CATEGORY_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                categoryData:payload.data,
                messageError:''
            }
        case "CATEGORY_ERROR":
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

export default categoryReducer