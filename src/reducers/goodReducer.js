import { createSlice } from '@reduxjs/toolkit'

const goodSlice = createSlice({
  name: 'good',
  initialState: {
    currentGood: null
  },
  reducers: {
    setCurrentGood: (state, action) => {
      state.currentGood = action.payload
    },
  }
});

export const { setCurrentGood} = goodSlice.actions;
export default goodSlice.reducer;