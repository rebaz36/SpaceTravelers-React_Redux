import { createSlice, CreateAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getRockets = CreateAsyncThunk(
  'rocketSlice/getRockets', async () => {
    const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
    rockets.then((rocket) => console.log(rocket));
    return rockets;
  },
);

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
    loading: true,
    status: '',
    reserved: 'reserved',
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const newState = state;
      newState.rockets = action.payload;
    });
  },
});

export default rocketSlice;
