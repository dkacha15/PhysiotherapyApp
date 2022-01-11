import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authenticated: localStorage.getItem('authenticated'),
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.authenticated = true;
    },
   
    logout: (state) => {
      localStorage.setItem('authenticated',false)
      state.authenticated = false;
    },
  },
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer