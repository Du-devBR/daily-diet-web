import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser } from "../../actions/login/login-action";
import { RootState } from "../../store";

interface ILoginState {
  token: string | null,
  loading: boolean,
  error: string | null
}



const initialState: ILoginState = {
  token: '',
  loading: false,
  error: null
}


const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
    .addCase(fetchLoginUser.pending, (state) => {
      state.loading = true,
      state.error = null
    })
    .addCase(fetchLoginUser.fulfilled, (state, action: PayloadAction<ILoginState>) => {
      state.loading = false,
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token as string)
    })
    .addCase(fetchLoginUser.rejected, (state, action) => {
      state.loading = false,
      state.error = action.error.message || 'error login'
    })
  }
})

export const selectLogin = (state: RootState) => state.login.token
export const selectLoading = (state: RootState) => state.login.loading
export const selectError = (state: RootState) => state.login.error

export default loginSlice.reducer
