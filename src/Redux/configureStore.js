// redux configuration
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import missionsReducer from './Missions/Missions';
import rocketSlice from './Rockets/Rockets';

const bookReducers = combineReducers({
  // Missions: booksReducer,
  Rockets: rocketSlice.reducer,
});

const store = configureStore({
  reducer: bookReducers,
});

export default store;
