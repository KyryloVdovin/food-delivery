import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMddleware from 'redux-thunk';

const reducer = combineReducers({
    // burgerPage:
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;