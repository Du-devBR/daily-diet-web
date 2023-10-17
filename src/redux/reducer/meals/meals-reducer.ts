import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMeal } from "../../../screens/home";
import { createNewMeal, deleteMeal, fetchAllMeals, fetchMealById, updateMeal } from "../../actions/meals/meals-actions";
import { RootState } from "../../store";

interface MealsState {
  meals: IMeal[];
  loading: boolean;
  error: string | null;
}

const initialState: MealsState = {
  meals: [],
  loading: false,
  error: null
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchAllMeals.pending, (state) => {
          state.loading = true;
          state.error = null
        })
        .addCase(fetchAllMeals.fulfilled, (state, action: PayloadAction<IMeal[]>) => {
          state.loading = false;
          state.meals = action.payload
        })
        .addCase(fetchAllMeals.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Ocorreu um erro'
        })
        .addCase(fetchMealById.pending, (state) => {
          state.loading = true;
          state.error = null
        })
        .addCase(fetchMealById.fulfilled, (state, action: PayloadAction<IMeal[]>) => {
          state.loading = false;
          state.meals = action.payload
        })
        .addCase(fetchMealById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Ocorreu um erro'
        })
        .addCase(createNewMeal.pending, (state) => {
          state.loading = true;
          state.error = null
        })
        .addCase(createNewMeal.fulfilled, (state, action: PayloadAction<IMeal>) => {
          state.loading = false;
          state.meals = [...state.meals, action.payload]
        })
        .addCase(createNewMeal.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Ocorreu um erro';
        })

        .addCase(updateMeal.pending, (state) => {
          state.loading = true;
          state.error = null
        })
        .addCase(updateMeal.fulfilled, (state, action: PayloadAction<IMeal>) => {
          state.loading = false;
          state.meals = [action.payload]
        })
        .addCase(updateMeal.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Ocorreu um erro';
        })
        .addCase(deleteMeal.pending, (state) => {
          state.loading = true;
          state.error = null
        })
        .addCase(deleteMeal.fulfilled, (state, action: PayloadAction<IMeal>) => {
          state.loading = false;
          state.meals = [...state.meals, action.payload]
        })
        .addCase(deleteMeal.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Ocorreu um erro';
        })
  },
})

export const selectMeals = (state: RootState) => state.meals.meals
export const selectLoading = (state: RootState) => state.meals.loading
export const selectError = (state: RootState) => state.meals.error

export default mealsSlice.reducer
