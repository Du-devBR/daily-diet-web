import { createAsyncThunk } from "@reduxjs/toolkit";
import { Ilogin } from "../../../screens/login";
import axios from "axios";

export const fetchLoginUser = createAsyncThunk('login/fetchLoginUser', async (login: Ilogin) => {
  const response = await axios.post('http://localhost:3333/user/login', login)

  return await response.data
})
