import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegister } from "../../../screens/register";
import axios from "axios";
import { API_DAILY_DIET } from "../../../service/Api";

export const fetchRegisterUser = createAsyncThunk('register/fetchRegisterUser', async (register: IRegister) => {
  const response = await axios.post(`${API_DAILY_DIET}/user/register`, register)

  return response.data
})
