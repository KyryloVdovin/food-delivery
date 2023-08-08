// const GET_ALL_BURGERS = 'GET_ALL_BURGERS';
// const SET_SUMMARY_CATEGORY = 'SET_SUMMARY_CATEGORY';

// const initialState = {
//     isSummaryTableOpen: false,
//     selectedSummaryCategory: ''
// }

// type ACTION_TYPE =
//   | { type: 'IS_SUMMARY_TABLE_OPEN', payload: number }
//   | { type: 'SET_SUMMARY_CATEGORY', payload: string }

// const burgerContentReducer = (state = initialState, action: ACTION_TYPE) => {
//     switch (action.type) {
//         case GET_ALL_BURGERS:
//             return {
//                 ...state,
//             }
//         case SET_SUMMARY_CATEGORY:
//             return {
//                 ...state,
//             }
//         default:
//             return state;
//     }
// }

// export const getAllBurgers = () => {
//     return {
//         type: GET_ALL_BURGERS,
//     }
// };
// export const selectSummaryCategory = () => {
//     return {
//         type: SET_SUMMARY_CATEGORY,
//     }
// };

// export default burgerContentReducer;