import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./reducer/meals/meals-reducer";
import metricsReducer from "./reducer/metrics/metrics-reducer";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    metrics: metricsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
