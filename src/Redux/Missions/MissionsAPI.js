import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_MISSIONS } from '../Actions';

// API URL
const URL = 'https://api.spacexdata.com/v3/missions';

const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
});

export default getMissions;

// export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
//   await fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify(book),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
// });

// export const removeBook = createAsyncThunk(REMOVE_BOOK, async (itemId) => {
//   await fetch(`${URL}/${itemId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// });
