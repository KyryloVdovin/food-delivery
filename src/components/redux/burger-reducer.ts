import { IProduct } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_BURGERS_LIST = 'GET_BURGERS_LIST';
const SET_SUMMARY_CATEGORY = 'SET_SUMMARY_CATEGORY';

const initialState = {
    burgerList: [],
    catalogTitle: 'Burgers'
}

type ACTION_TYPE =
    | { type: 'GET_BURGERS_LIST', burgers: [IProduct] }
    | { type: 'SET_SUMMARY_CATEGORY', payload: string }

const burgerContentReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_BURGERS_LIST:
            return {
                ...state,
                burgerList: action.burgers
            }
        case SET_SUMMARY_CATEGORY:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const getBurgersList = (burgers: [IProduct]) => {
    return {
        type: GET_BURGERS_LIST,
        burgers
    }
};

export const getBurgers = (): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        let response = await foodAPI.getBurgers();
        if (response.status === 200) {
            dispatch(getBurgersList(response.data.burgers));
        }
    }

export default burgerContentReducer;