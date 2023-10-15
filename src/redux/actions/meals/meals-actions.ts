import axios from "axios"
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchAllMeals = createAsyncThunk('', async () => {
  const response = await axios.get('')
  return (await response.data)
})
