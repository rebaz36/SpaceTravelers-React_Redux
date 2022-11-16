// redux configuration
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rocketSlice from './Rockets/Rockets';
import missionsReducer from './Missions/Missions';

const spaceReducers = combineReducers({
  Missions: missionsReducer,
  Rockets: rocketSlice.reducer,
});

const store = configureStore({
  reducer: spaceReducers,
});

export default store;
