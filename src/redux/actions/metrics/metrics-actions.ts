import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMetrics } from "../../../screens/statistics";
import { getTokenUser } from "../../../util/tokenUtils";

const localStorageToken = localStorage.getItem('token')
const userId = getTokenUser(localStorageToken as string)

export const fetchMetrics = createAsyncThunk('metrics/fetchMetrics', async () => {
  const localStorageToken = localStorage.getItem('token')
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.get(`http://localhost:3333/user/${userId}/metrics`, {headers: option})
  return (await response.data.metrics as IMetrics)
})
