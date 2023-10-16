import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMetrics } from "../../../screens/statistics";
import { fetchMetrics } from "../../actions/metrics/metrics-actions";
import { RootState } from "../../store";

interface MetricsState {
  metrics: IMetrics;
  loading: boolean;
  error: string | null;
}

const initialState: MetricsState = {
  metrics: {
    totalResgitered: 0,
    maxSequence: 0,
    offDiet: 0,
    percentMealsWithinDiet: 0,
    withinDiet: 0
  },
  loading: false,
  error: null
}

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
    .addCase(fetchMetrics.pending, (state) => {
      state.loading = true;
      state.error = null
    })
    .addCase(fetchMetrics.fulfilled, (state, action: PayloadAction<IMetrics>) => {
      state.loading = false;
      state.metrics = action.payload
    })
    .addCase(fetchMetrics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ocorreu um erro'
    })
  }
})

export const selectMetrics = (state: RootState) => state.metrics.metrics
export const selectLoading = (state: RootState) => state.metrics.loading
export const selectError = (state: RootState) => state.metrics.error

export default metricsSlice.reducer
