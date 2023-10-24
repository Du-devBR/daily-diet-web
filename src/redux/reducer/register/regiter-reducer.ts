import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchRegisterUser } from "../../actions/register/register-action"
import { RootState } from "../../store"

interface IRegiterState {
  register: string,
  loading: boolean,
  error: string | null,
}

const initialState: IRegiterState = {
  register: "",
  loading: false,
  error: null
}

const regiterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
    .addCase(fetchRegisterUser.pending, (state) => {
      state.loading = true,
      state.error = null
    })
    .addCase(fetchRegisterUser.fulfilled, (state, action: PayloadAction<IRegiterState>) => {
      state.loading = false,
      state.register = action.payload.register
    })
    .addCase(fetchRegisterUser.rejected, (state, action) => {
      state.loading = false,
      state.error = action.error.message || 'error login'
    })
  }
})


export default regiterSlice.reducer

export const selectLoading = (state: RootState) => state.regiter.loading
