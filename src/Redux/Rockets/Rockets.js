import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rocketSlice/getRockets', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets')
      .then((rocket) => rocket.json());
    const rockets = response.map((rocket) => {
      const rockets = {
        id: rocket.rocket_id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        flickrImages: rocket.flickr_images,
      };
      return rockets;
    });
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
  reducers: {
    reservedRocket(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });

      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const newState = state;
      newState.rockets = action.payload;
    });
  },
});

export const { reservedRocket } = rocketSlice.actions;
export default rocketSlice;
