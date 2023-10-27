import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./reducer/meals/meals-reducer";
import metricsReducer from "./reducer/metrics/metrics-reducer";
import loginReducer from "./reducer/login/login-reducer";
import regiterReducer from "./reducer/register/regiter-reducer";
import sendEmailReducer from "./reducer/regenerateNewPassword/sendEmail-reducer";
import resetPasswordReducer from "./reducer/regenerateNewPassword/resetPassword-reducer";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    metrics: metricsReducer,
    login: loginReducer,
    regiter: regiterReducer,
    sendEmail: sendEmailReducer,
    reset: resetPasswordReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
