import { createSlice } from "@reduxjs/toolkit"
import { fetchSendEmail } from "../../actions/regenerateNewPassword/sendEmail-action"
import { RootState } from "../../store"

interface ISendEmailState {
  status: number | null,
  loading: boolean,
  error: string | null
}

const initialState: ISendEmailState = {
  status: null,
  loading: false,
  error: null
}

const sendEmailSlice = createSlice({
  name: 'sendEmail',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
    .addCase(fetchSendEmail.pending, (state) => {
      state.loading = true,
      state.error = null
    })
    .addCase(fetchSendEmail.fulfilled, (state, action) => {
      state.loading = false,
      state.status = action.payload

    })
    .addCase(fetchSendEmail.rejected, (state, action) => {
      state.loading = false,
      state.error = action.error.message || ""
    })
  }
})

export const selecStatus = (state: RootState) => state.sendEmail.status
export const selectLoading = (state: RootState) => state.sendEmail.loading
export const selectError = (state: RootState) => state.sendEmail.error


export default sendEmailSlice.reducer
