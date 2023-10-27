import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_DAILY_DIET } from "../../../service/Api";
import { IEmail } from "../../../screens/regenerateNewPassword/sendEmail";

export const fetchSendEmail = createAsyncThunk("sendEmail/fetchSendEmail", async(email: IEmail) => {
  const response = await axios.post(`${API_DAILY_DIET}/email`, email)

  return  response.status
})
