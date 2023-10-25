import axios from "axios"
import {createAsyncThunk} from '@reduxjs/toolkit'
import { IMeal } from "../../../screens/home"
import { getTokenUser } from "../../../util/tokenUtils"
import { API_DAILY_DIET } from "../../../service/Api"


export const fetchAllMeals = createAsyncThunk('meals/fetchMeals', async () => {

  const localStorageToken = localStorage.getItem('token')
  const userId = localStorageToken ?  getTokenUser(localStorageToken as string): null
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.get(`${API_DAILY_DIET}/user/${userId}/meal`, {headers: option})
  return (await response.data.meals as IMeal[])
})

export const fetchMealById = createAsyncThunk('meals/fetchMealById', async(id: string) => {
  const localStorageToken = localStorage.getItem('token')
  const userId = localStorageToken ?  getTokenUser(localStorageToken as string): null
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.get(`${API_DAILY_DIET}/user/${userId}/meal/${id}`, {headers: option})
  return await response.data.meal as IMeal[]
})

export const createNewMeal = createAsyncThunk('meals/createNewMeal', async(meal: IMeal) => {
  const localStorageToken = localStorage.getItem('token')
  const userId = localStorageToken ?  getTokenUser(localStorageToken as string): null
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.post(`${API_DAILY_DIET}/user/${userId}/meal`, meal, {headers: option})
  return  response.status
})

export const updateMeal = createAsyncThunk('meals/updateMeal', async({id, meal}: {id: string, meal: IMeal}) => {
  const localStorageToken = localStorage.getItem('token')
  const userId = localStorageToken ?  getTokenUser(localStorageToken as string): null
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.put(`${API_DAILY_DIET}/user/${userId}/meal/${id}`, meal, {headers: option})
  return response.status

})

export const deleteMeal = createAsyncThunk('meals/deleteMeal', async(id: string) => {
  const localStorageToken = localStorage.getItem('token')
  const userId = localStorageToken ?  getTokenUser(localStorageToken as string): null
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.delete(`${API_DAILY_DIET}/user/${userId}/meal/${id}`, {headers: option})

  return  response.status
})
