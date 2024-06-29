import cartItems from "./Reducer";
import {combineReducers } from "redux"


const rootReducer = combineReducers({
    cartItems,
})

export default rootReducer;