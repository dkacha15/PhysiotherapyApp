import { createSlice } from '@reduxjs/toolkit'
import cookie from "react-cookies";

const initialState = {
  authenticated: cookie.load("access_token") ? true : false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      cookie.remove("access_token");
      window.location.reload();
    },
  },
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer