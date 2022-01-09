import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authenticated: false,
}

export const dashboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.authenticated = true;
    },
   
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dashboardSlice.actions

export default dashboardSlice.reducer