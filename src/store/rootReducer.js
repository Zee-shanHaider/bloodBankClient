import { combineReducers } from "redux"
import { userReducer } from "./user/userReducer"
import { donorReducer } from "./donor/donorReducer"
export const rootReducer = combineReducers({
    user: userReducer,
    donor: donorReducer,
})