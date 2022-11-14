// redux configuration
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import missionsReducer from './Missions/Missions';
// import rocketsReducer from './Rockets/Rockets';

const bookReducers = combineReducers({
  // Missions: booksReducer,
  // Rockets: categoriesReducer,
});

const store = configureStore({
  reducer: bookReducers,
});

export default store;
