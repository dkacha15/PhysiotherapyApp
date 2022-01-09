import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../src/Dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
      dashboard: dashboardReducer,
  },
})