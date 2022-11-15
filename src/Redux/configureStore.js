// redux configuration
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './Missions/Missions';
// import rocketsReducer from './Rockets/Rockets';

const spaceReducers = combineReducers({
  Missions: missionsReducer,
  // Rockets: categoriesReducer,
});

const store = configureStore({
  reducer: spaceReducers,
});

export default store;
