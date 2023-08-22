import { IProduct, IProductDetails } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_BURGERS_LIST = 'GET_BURGERS_LIST';
const GET_BURGER = 'GET_BURGER';
const IS_FETCHING = 'IS_FETCHING';

const initialState = {
    currentProduct: null,
    isFetching: false
}

type ACTION_TYPE =
    | { type: 'GET_BURGERS_LIST', burgers: [IProduct] }
    | { type: 'GET_BURGER', currentProduct: IProductDetails }
    | { type: 'IS_FETCHING', isFetching: boolean }

const productCartReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_BURGER:
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

export const getBurgerData = (currentProduct: IProductDetails) => {
    return {
        type: GET_BURGER,
        currentProduct
    }
};
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};

export const getProduct = (category: string, id: number): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        dispatch(setIsFetching(true));

        let response = await foodAPI.getProduct(category, id);

        if (response.status === 200) {
            dispatch(getBurgerData(response.data));
            dispatch(setIsFetching(false));
        }
    }

export default productCartReducer;