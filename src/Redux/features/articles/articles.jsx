import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/api";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async () => {
    const response = await axios.get("api/articles");
    return response.data;
  },
);

export const deleteArticleFromServer = createAsyncThunk(
  "articles/deleteArticleFromServer",
  async (articleId) => {
    const response = await axios.delete(`api/articles/${articleId}`);
    return response.data;
  },
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesFromServer.fulfilled, (_, action) => action.payload)
      .addCase(deleteArticleFromServer.fulfilled, (state, action) => {
        const filteredArticles = state.filter(
          (article) => article._id !== action.payload.id,
        );
        return filteredArticles;
      });
  },
});

export default articlesSlice.reducer;
