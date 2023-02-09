import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const saveState = (state) => {
    try {
        // Convert the state to a JSON string 
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};
const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        
        return undefined;
    }
};const oldState = loadState();
const store  = createStore(rootReducer, oldState, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    saveState(store.getState());
});
export default store