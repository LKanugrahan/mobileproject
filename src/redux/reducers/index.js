import { combineReducers } from "redux";

import authReducer from './login'
import searchMenuReducer from "./searchMenu";
import categoryReducer from "./category";
import registerReducer from "./register";
import profileReducer from "./profile";
import menuReducer from "./menu";
import detailMenuReducer from "./detailMenu";


const appReducers = combineReducers({
    registerReducer,
    authReducer,
    profileReducer,
    categoryReducer,
    detailMenuReducer,
    searchMenuReducer,
    menuReducer,
})

export default appReducers