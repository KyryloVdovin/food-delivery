import { IProduct } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_PIZZA_LIST = 'GET_PIZZA_LIST';
const SET_SUMMARY_CATEGORY = 'SET_SUMMARY_CATEGORY';

const initialState = {
    pizzaList: [],
    catalogTitle: 'Pizza'
}

type ACTION_TYPE =
    | { type: 'GET_PIZZA_LIST', pizza: [IProduct] }
    | { type: 'SET_SUMMARY_CATEGORY', payload: string }

const pizzaContentReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_PIZZA_LIST:
            return {
                ...state,
                pizzaList: action.pizza
            }
        case SET_SUMMARY_CATEGORY:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const getPizzaList = (pizza: [IProduct]) => {
    return {
        type: GET_PIZZA_LIST,
        pizza
    }
};

export const getPizza = (): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        let response = await foodAPI.getPizza();

        if (response.status === 200) {
            dispatch(getPizzaList(response.data.pizza));
        }
    }

export default pizzaContentReducer;