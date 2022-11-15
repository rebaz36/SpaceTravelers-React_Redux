/* eslint-disable camelcase */
import { GET_MISSIONS } from '../Actions';

// Reducer section
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    // case `${ADD_BOOK}/fulfilled`:
    //   return state.concat(action.meta.arg);
    // case `${REMOVE_BOOK}/fulfilled`:
    //   return state.filter((book) => book.item_id !== action.meta.arg);
    case `${GET_MISSIONS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { mission_id, mission_name, description } = action.payload[key];
        return {
          mission_id,
          mission_name,
          description,
        };
      });
    default:
      return state;
  }
};

// // Action creators section
// export const addBook = (book) => ({
//   type: ADD_BOOK,
//   book,
// });

// export const removeBook = (book) => ({
//   type: REMOVE_BOOK,
//   book,
// });

export default missionsReducer;
