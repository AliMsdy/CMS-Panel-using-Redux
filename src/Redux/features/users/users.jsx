import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../services/api";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async () => {
    const response = await axios.get("api/users");

    return response.data;
  },
);

export const deleteUserFromServer = createAsyncThunk(
  "users/deleteUserFromServer",
  async (userId) => {
    const response = await axios.delete(`api/users/${userId}`);
    return response.data; //userId returned
  },
);
export const createUserInServer = createAsyncThunk(
  "users/createUserInServer",
  async (userInfo) => {
     await axios.post("api/users",userInfo);
    const allUsers = await axios.get("api/users")
    return allUsers.data;
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFromServer.fulfilled, (_, action) => action.payload)
      .addCase(deleteUserFromServer.fulfilled, (state, action) => {
        const filteredUsers = state.filter(
          (user) => user._id !== action.payload.id,
        );
        return filteredUsers;
      })
      .addCase(
        createUserInServer.fulfilled,
        (_, action) => action.payload,
      );
  },
});

export default usersSlice.reducer;
