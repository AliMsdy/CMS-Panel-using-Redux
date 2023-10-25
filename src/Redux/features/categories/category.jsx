import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../services/api";

export const getCategoriesFromServer = createAsyncThunk(
  "categories/getCategoriesFromServer",
  async () => {
    const response = await axios.get("api/categories");
    return response.data;
  },
);

export const createCategoryInServer = createAsyncThunk(
  "users/createCategoryInServer",
  async (categoryInfo) => {
    try {
      await axios.post("api/categories", categoryInfo);
    } catch (error) {
      console.log("Error", error);
    }
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategoriesFromServer.fulfilled,
      (_, action) => action.payload,
    );
  },
});

export default categoriesSlice.reducer;
