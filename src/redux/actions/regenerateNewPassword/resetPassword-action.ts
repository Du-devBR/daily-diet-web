import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_DAILY_DIET } from "../../../service/Api";

export const fetchTokenForResetPassword = createAsyncThunk('reset/fetchTokenForResetPassword', async (token: string) => {
  try {
    const response = await axios.get(`${API_DAILY_DIET}/redefinepassword?token=${token}`)
    return response.status
  } catch (error) {
    console.log(error);
    throw error
  }

})


// export const fetchTokenForResetPassword = createAsyncThunk(
//   'reset/fetchTokenForResetPassword',
//   async (token: string) => {
//     try {
//       const response = await axios.get(`${API_DAILY_DIET}/redefinepassword?token=${token}`);
//       return response.status;
//     } catch (error) {
//       console.error(error);
//       throw error; // Se ocorrer um erro, repasse o erro para ser tratado mais tarde
//     }
//   }
// );
