import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMddleware from 'redux-thunk';
import burgerContentReducer from "./burger-reducer";
import pizzaContentReducer from "./pizza-reducer";
import productCartReducer from "./product-cart-reducer";

const reducer = combineReducers({
    burgersPage: burgerContentReducer,
    pizzaPage: pizzaContentReducer,
    productCartPage: productCartReducer
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;