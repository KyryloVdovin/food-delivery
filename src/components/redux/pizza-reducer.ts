import { IProduct, IProductDetails } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_PIZZA_LIST = 'GET_PIZZA_LIST';
const GET_PIZZA = 'GET_PIZZA';
const IS_FETCHING = 'IS_FETCHING';

const initialState = {
    pizzaList: [],
    catalogTitle: 'Pizza',
    currentProduct: null,
    isFetching: false
}

type ACTION_TYPE =
    | { type: 'GET_PIZZA_LIST', pizza: [IProduct] }
    | { type: 'GET_PIZZA', currentProduct: IProductDetails }
    | { type: 'IS_FETCHING', isFetching: boolean }

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
                currentProduct: action.currentProduct
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
const getPizzaData = (pizza: IProduct) => {
    return {
        type: GET_PIZZA,
        pizza
    }
};

const setIsFetching = (isFetching: boolean) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};

export const getPizzaList = (): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        dispatch(setIsFetching(true));
        let response = await foodAPI.getPizzaList();

        if (response.status === 200) {
            dispatch(getPizzaListData(response.data.pizza));
            dispatch(setIsFetching(false));
        }
    }
// export const getPizza = (id: number): ThunkAction<void, {}, unknown, AnyAction> =>
//     async (dispatch) => {
//         dispatch(setIsFetching(true));
//         let response = await foodAPI.getProduct(id);

//         if (response.status === 200) {
//             dispatch(getPizzaData(response.data));
//             dispatch(setIsFetching(false));
//         }
//     }

export default pizzaContentReducer;