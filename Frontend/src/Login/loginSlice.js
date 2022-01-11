import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authenticated: false,
}

export const dashboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state) => {
      state.authenticated = true;
    },
   
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = dashboardSlice.actions

export default dashboardSlice.reducer