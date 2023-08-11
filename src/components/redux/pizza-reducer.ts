import { IProduct } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_PIZZA_LIST = 'GET_PIZZA_LIST';
const GET_PIZZA = 'GET_PIZZA';

const initialState = {
    pizzaList: [],
    catalogTitle: 'Pizza'
}

type ACTION_TYPE =
    | { type: 'GET_PIZZA_LIST', pizza: [IProduct] }
    | { type: 'GET_PIZZA', payload: string }

const pizzaContentReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_PIZZA_LIST:
            return {
                ...state,
                pizzaList: action.pizza
            }
        case GET_PIZZA:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const getPizzaListData = (pizza: [IProduct]) => {
    return {
        type: GET_PIZZA_LIST,
        pizza
    }
};
export const getPizzaData = (pizza: IProduct) => {
    return {
        type: GET_PIZZA,
        pizza
    }
};

export const getPizzaList = (): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        let response = await foodAPI.getPizza();

        if (response.status === 200) {
            dispatch(getPizzaListData(response.data.pizza));
        }
    }
export const getPizza = (id: number): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        let response = await foodAPI.getPizza();

        if (response.status === 200) {
            dispatch(getPizzaData(response.data.pizza));
        }
    }

export default pizzaContentReducer;