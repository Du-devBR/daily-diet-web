import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMetrics } from "../../../screens/statistics";

export const fetchMetrics = createAsyncThunk('metrics/fetchMetrics', async () => {
  const response = await axios.get("http://localhost:3333/user/7a7995cd-4278-4fd3-8411-84384269b872/metrics")
  return (await response.data.metrics as IMetrics)
})
