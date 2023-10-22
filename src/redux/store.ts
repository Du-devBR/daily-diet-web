import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./reducer/meals/meals-reducer";
import metricsReducer from "./reducer/metrics/metrics-reducer";
import loginReducer from "./reducer/login/login-reducer";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    metrics: metricsReducer,
    login: loginReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
