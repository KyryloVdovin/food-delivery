import { IProduct, IProductDetails } from "../../interfaces/food-interface";
import { foodAPI } from "../../api/api";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

const GET_BURGERS_LIST = 'GET_BURGERS_LIST';
const GET_BURGER = 'GET_BURGER';
const IS_FETCHING = 'IS_FETCHING';
const SET_CLICKED_ITEM_ID = 'SET_CLICKED_ITEM_ID';

const initialState = {
    burgerList: [
        {
            id: 1,
            name: "Bacon,Egg & Cheese Biscuit",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
            desc: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's. ",
            ingredients: [
              {
                id: 1,
                name: "Biscuit"
              },
              {
                id: 2,
                name: "Biscuit"
              },
              {
                id: 3,
                name: "Biscuit"
              },
              {
                id: 4,
                name: "Biscuit"
              },
              {
                id: 5,
                name: "Biscuit"
              }
              
            ],
            price: 3.23,
            veg: false,
            weight: 350,
            unit: "g"
          },{
            id: 1,
            name: "Bacon,Egg & Cheese Biscuit",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
            desc: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's. ",
            ingredients: [
              {
                id: 1,
                name: "Biscuit"
              },
              {
                id: 2,
                name: "Biscuit"
              },
              {
                id: 3,
                name: "Biscuit"
              },
              {
                id: 4,
                name: "Biscuit"
              },
              {
                id: 5,
                name: "Biscuit"
              }
              
            ],
            price: 3.23,
            veg: false,
            weight: 350,
            unit: "g"
          },
          {
            id: 1,
            name: "Bacon,Egg & Cheese Biscuit",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
            desc: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's. ",
            ingredients: [
              {
                id: 1,
                name: "Biscuit"
              },
              {
                id: 2,
                name: "Biscuit"
              },
              {
                id: 3,
                name: "Biscuit"
              },
              {
                id: 4,
                name: "Biscuit"
              },
              {
                id: 5,
                name: "Biscuit"
              }
              
            ],
            price: 3.23,
            veg: false,
            weight: 350,
            unit: "g"
          },
          {
            id: 1,
            name: "Bacon,Egg & Cheese Biscuit",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
            desc: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's. ",
            ingredients: [
              {
                id: 1,
                name: "Biscuit"
              },
              {
                id: 2,
                name: "Biscuit"
              },
              {
                id: 3,
                name: "Biscuit"
              },
              {
                id: 4,
                name: "Biscuit"
              },
              {
                id: 5,
                name: "Biscuit"
              }
              
            ],
            price: 3.23,
            veg: false,
            weight: 350,
            unit: "g"
          },
          {
            id: 1,
            name: "Bacon,Egg & Cheese Biscuit",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
            desc: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's. ",
            ingredients: [
              {
                id: 1,
                name: "Biscuit"
              },
              {
                id: 2,
                name: "Biscuit"
              },
              {
                id: 3,
                name: "Biscuit"
              },
              {
                id: 4,
                name: "Biscuit"
              },
              {
                id: 5,
                name: "Biscuit"
              }
              
            ],
            price: 3.23,
            veg: false,
            weight: 350,
            unit: "g"
          },
          {
            id: 1,
            name: "Bacon,Egg & Cheese Biscuit",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop",
            desc: "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's. ",
            ingredients: [
              {
                id: 1,
                name: "Biscuit"
              },
              {
                id: 2,
                name: "Biscuit"
              },
              {
                id: 3,
                name: "Biscuit"
              },
              {
                id: 4,
                name: "Biscuit"
              },
              {
                id: 5,
                name: "Biscuit"
              }
              
            ],
            price: 3.23,
            veg: false,
            weight: 350,
            unit: "g"
          }
    ],
    currentProduct: null,
    catalogTitle: 'Burgers',
    isFetching: false,
    clickedProductId: 0
}

type ACTION_TYPE =
    | { type: 'GET_BURGERS_LIST', burgers: [IProduct] }
    | { type: 'GET_BURGER', currentProduct: IProductDetails }
    | { type: 'IS_FETCHING', isFetching: boolean }
    | { type: 'SET_CLICKED_ITEM_ID', id: number }

const burgerContentReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_BURGERS_LIST:
            return {
                ...state,
                burgerList: action.burgers
            }
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
        case SET_CLICKED_ITEM_ID:
            return {
                ...state,
                clickedProductId: action.id
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

export const setIsFetching = (isFetching: boolean) => {
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

export const getBurgers = (): ThunkAction<void, {}, unknown, AnyAction> =>
    async (dispatch) => {
        try {
            // dispatch(setIsFetching(true));
            // let response = await foodAPI.getBurgers();

            // if (response.status === 200) {
            //     dispatch(getBurgersList(response.data.burgers));
            //     dispatch(setIsFetching(false));
            // }
        }
        catch (err) {
            console.log(err);
        }
    }

export default burgerContentReducer;