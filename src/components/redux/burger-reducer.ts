import { IBurger } from "../../interfaces/food-interface";

const GET_ALL_BURGERS = 'GET_ALL_BURGERS';
const SET_SUMMARY_CATEGORY = 'SET_SUMMARY_CATEGORY';

const initialState = {
    burgerList: [
        {
            id: 1,
            name: "Quarter Pounder®* with Cheese",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop",
            desc: "Each Quarter Pounder® with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun. Our QPC® contains no artificial flavors, preservatives or added colors from artificial sources. **Our pickle contains an artificial preservative, so skip it if you like. A Quarter Pounder® with Cheese has 520 Calories. ",
            ingredients: [
                {
                    id: 1,
                    name: "Quarter Pound 100% Beef Patty"
                },
                {
                    id: 2,
                    name: "Quarter Pound Bun"
                },
                {
                    id: 3,
                    name: "Pasteurized Process American Cheese"
                },
                {
                    id: 4,
                    name: "Ketchup"
                },
                {
                    id: 5,
                    name: "Pickle Slices"
                },
                {
                    id: 6,
                    name: "Onions"
                },
                {
                    id: 7,
                    name: "Mustard"
                }
            ],
            price: 6,
            veg: false,
            weight: 250,
            unit: "g"
        },
        {
            id: 2,
            name: "Quarter Pounder®* with Cheese",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop",
            desc: "Each Quarter Pounder® with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun. Our QPC® contains no artificial flavors, preservatives or added colors from artificial sources. **Our pickle contains an artificial preservative, so skip it if you like. A Quarter Pounder® with Cheese has 520 Calories. ",
            ingredients: [
                {
                    id: 1,
                    name: "Quarter Pound 100% Beef Patty"
                },
                {
                    id: 2,
                    name: "Quarter Pound Bun"
                },
                {
                    id: 3,
                    name: "Pasteurized Process American Cheese"
                },
                {
                    id: 4,
                    name: "Ketchup"
                },
                {
                    id: 5,
                    name: "Pickle Slices"
                },
                {
                    id: 6,
                    name: "Onions"
                },
                {
                    id: 7,
                    name: "Mustard"
                }
            ],
            price: 6,
            veg: false,
            weight: 250,
            unit: "g"
        },
        {
            id: 3,
            name: "Quarter Pounder®* with Cheese",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop",
            desc: "Each Quarter Pounder® with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun. Our QPC® contains no artificial flavors, preservatives or added colors from artificial sources. **Our pickle contains an artificial preservative, so skip it if you like. A Quarter Pounder® with Cheese has 520 Calories. ",
            ingredients: [
                {
                    id: 1,
                    name: "Quarter Pound 100% Beef Patty"
                },
                {
                    id: 2,
                    name: "Quarter Pound Bun"
                },
                {
                    id: 3,
                    name: "Pasteurized Process American Cheese"
                },
                {
                    id: 4,
                    name: "Ketchup"
                },
                {
                    id: 5,
                    name: "Pickle Slices"
                },
                {
                    id: 6,
                    name: "Onions"
                },
                {
                    id: 7,
                    name: "Mustard"
                }
            ],
            price: 6,
            veg: false,
            weight: 250,
            unit: "g"
        },
        {
            id: 4,
            name: "Sausage McMuffin",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin:1-4-product-tile-desktop",
            des: "McDonald's Sausage McMuffin® recipe features a warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese. There are 400 calories in a Sausage McMuffin® at McDonald's. ",
            ingredients: [
                {
                    id: 1,
                    name: "English Muffin"
                },
                {
                    id: 2,
                    name: "Sausage Patty"
                },
                {
                    id: 3,
                    name: "Salted Butter"
                },
                {
                    id: 4,
                    name: "Clarified Butter"
                }
            ],
            price: 12,
            veg: false,
            weight: 350,
            unit: "g"
        }
    ],
    catalogTitle: 'Burgers'
}

type ACTION_TYPE =
    | { type: 'GET_ALL_BURGERS', payload: number }
    | { type: string, payload: string }

const burgerContentReducer = (state = initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case GET_ALL_BURGERS:
            return {
                ...state,
            }
        case SET_SUMMARY_CATEGORY:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const getAllBurgers = (burgerList: [IBurger]) => {
    return {
        type: GET_ALL_BURGERS,
        burgerList
    }
};
export const selectSummaryCategory = () => {
    return {
        type: SET_SUMMARY_CATEGORY,
    }
};

export default burgerContentReducer;