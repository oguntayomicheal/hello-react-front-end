import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action
const FETCH_GREETING = 'Greeting/Fetch';
const url = 'http://127.0.0.1:3000/api/greetings';

export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

// Reducer

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    eachgreeting: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      const newState = {
        ...state,
        eachgreeting: action.payload[0].message,
      };
      return newState;
    });
  },
});

export default greetingSlice.reducer;
