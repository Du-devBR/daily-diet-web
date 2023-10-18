import axios from "axios"
import {createAsyncThunk} from '@reduxjs/toolkit'
import { IMeal } from "../../../screens/home"

export const fetchAllMeals = createAsyncThunk('meals/fetchMeals', async () => {
  const response = await axios.get('http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/meal')
  return (await response.data.meals as IMeal[])
})

export const fetchMealById = createAsyncThunk('meals/fetchMealById', async(id: string) => {
  const response = await axios.get(`http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/meal/${id}`)
  return await response.data.meal as IMeal[]
})

export const createNewMeal = createAsyncThunk('meals/createNewMeal', async(meal: IMeal) => {
  const response = await axios.post('http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/meal', meal)
  return  response.status
})

export const updateMeal = createAsyncThunk('meals/updateMeal', async({id, meal}: {id: string, meal: IMeal}) => {
    const response = await axios.put(`http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/meal/${id}`, meal)
    return response.status

})

export const deleteMeal = createAsyncThunk('meals/deleteMeal', async(id: string) => {
  const response = await axios.delete(`http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/meal/${id}`)

  return  response.status
})
