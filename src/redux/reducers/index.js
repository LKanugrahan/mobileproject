import { combineReducers } from "redux";

import loginReducer from './login'
import postMenuReducer from "./postMenu";
import searchMenuReducer from "./searchMenu";
import detailMenuReducer from "./detailMenu";
import deleteMenuReducer from "./deleteMenu";

const appReducers = combineReducers({
    loginReducer,
    detailMenuReducer,
    searchMenuReducer,
    postMenuReducer,
    deleteMenuReducer
})

export default appReducers