import { combineReducers } from "redux"
import { userReducer } from "./user/userReducer"
import { donorReducer } from "./donor/donorReducer"
export const rootReducer = combineReducers({
    //checking pr
    user: userReducer,
    donor: donorReducer,
}) 