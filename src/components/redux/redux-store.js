import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMddleware from 'redux-thunk';
import burgerContentReducer from "./burger-reducer";

const reducer = combineReducers({
    burgersPage: burgerContentReducer
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;