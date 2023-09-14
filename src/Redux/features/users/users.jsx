import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async () => {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/users",
    );
    return response.data.users;
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default usersSlice.reducer;
