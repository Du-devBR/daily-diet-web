import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { fetchTokenForResetPassword } from "../../actions/regenerateNewPassword/resetPassword-action"

interface IResetPasswordState {
  status: number | null,
  loading: boolean,
  error: string | null
}

const initialState: IResetPasswordState = {
  status: null,
  loading: false,
  error: null
}

const resetPasswordSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
    .addCase(fetchTokenForResetPassword.pending, (state) => {
      state.loading = true,
      state.error = null
    })
    .addCase(fetchTokenForResetPassword.fulfilled, (state, action) => {
      state.loading = false,
      state.status = action.payload

    })
    .addCase(fetchTokenForResetPassword.rejected, (state, action) => {
      state.loading = false,
      state.error = action.error.message || ""
    })
  }
})

export const selecStatus = (state: RootState) => state.reset.status
export const selectLoading = (state: RootState) => state.reset.loading
export const selectError = (state: RootState) => state.reset.error


export default resetPasswordSlice.reducer
