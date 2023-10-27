import { createAsyncThunk } from "@reduxjs/toolkit";
import { Ilogin } from "../../../screens/login";
import axios from "axios";
import { API_DAILY_DIET } from "../../../service/Api";



export const fetchLoginUser = createAsyncThunk('login/fetchLoginUser', async (login: Ilogin) => {
  const response = await axios.post(`${API_DAILY_DIET}/login`, login)

  return await response.data
})
