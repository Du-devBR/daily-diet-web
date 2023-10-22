import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMetrics } from "../../../screens/statistics";
import { getTokenUser } from "../../../util/tokenUtils";

export const fetchMetrics = createAsyncThunk('metrics/fetchMetrics', async () => {
  const localStorageToken = localStorage.getItem('token')
  const userId = localStorageToken ? getTokenUser(localStorageToken as string): null
  const option = {
    Authorization: `Bearer ${localStorageToken}`
  }
  const response = await axios.get(`http://localhost:3333/user/${userId}/metrics`, {headers: option})
  return (await response.data.metrics as IMetrics)
})
