import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../src/Login/loginSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})