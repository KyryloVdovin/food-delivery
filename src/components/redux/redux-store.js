import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMddleware from 'redux-thunk';
import burgerContentReducer from "./burger-reducer";
import pizzaContentReducer from "./pizza-reducer";

const reducer = combineReducers({
    burgersPage: burgerContentReducer,
    pizzaPage: pizzaContentReducer
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;