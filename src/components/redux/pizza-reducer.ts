import { IProduct, IProductDetails } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_PIZZA_LIST = 'GET_PIZZA_LIST';
const GET_PIZZA = 'GET_PIZZA';
const IS_FETCHING = 'IS_FETCHING';
const SET_CLICKED_ITEM_ID = 'SET_CLICKED_ITEM_ID';

const initialState = {
    pizzaList: [],
    catalogTitle: 'Pizza',
    isFetching: false,
    clickedProductId: 0
}

type ACTION_TYPE =
    | { type: 'GET_PIZZA_LIST', pizza: [IProduct] }
    | { type: 'IS_FETCHING', isFetching: boolean }
    | { type: 'SET_CLICKED_ITEM_ID', id: number }

const pizzaContentReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_PIZZA_LIST:
            return {
                ...state,
                pizzaList: action.pizza
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_CLICKED_ITEM_ID:
            return {
                ...state,
                clickedProductId: action.id
            }
        default:
            return state;
    }
}

const getPizzaListData = (pizza: [IProduct]) => {
    return {
        type: GET_PIZZA_LIST,
        pizza
    }
};

const setIsFetching = (isFetching: boolean) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};

export const setClickedItemId = (id: number) => {
    return {
        type: SET_CLICKED_ITEM_ID,
        id
    }
};

export const getPizzaList = (): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            let response = await foodAPI.getPizzaList();

            if (response.status === 200) {
                dispatch(getPizzaListData(response.data.pizza));
                dispatch(setIsFetching(false));
            }
        }
        catch (err) {
            console.log(err);
        }
    }

export default pizzaContentReducer;