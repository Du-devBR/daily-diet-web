import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegister } from "../../../screens/register";
import axios from "axios";

export const fetchRegisterUser = createAsyncThunk('register/fetchRegisterUser', async (register: IRegister) => {
  const response = await axios.post('http://localhost:3333/user/register', register)

  return response.data
})
