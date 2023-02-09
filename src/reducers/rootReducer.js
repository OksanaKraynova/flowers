import {combineReducers}  from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import goodReducer from "./goodReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    articleState: articleReducer,
    goodState: goodReducer,
    orderState: orderReducer
})

export default rootReducer