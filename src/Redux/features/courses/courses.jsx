import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../services/api";

export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async () => {
    const response = await axios.get("api/courses");
    return response.data;
  },
);

export const deleteCourseFromServer = createAsyncThunk(
  "courses/deleteCourseFromServer",
  async (courseId) => {
    const response = await axios.delete(`api/courses/${courseId}`);
    return response.data;
  },
);

export const createCourseInTheServer = createAsyncThunk(
  "courses/createCourseInTheServer",
  async (courseData) => {
    try {
      await axios.post("api/courses", courseData);
      const allCourses = await axios.get("api/courses");
      return allCourses.data;
    } catch (error) {
      console.log("Error", error);
    }
  },
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesFromServer.fulfilled, (_, action) => action.payload)
      .addCase(deleteCourseFromServer.fulfilled, (state, action) => {
        const filteredCourses = state.filter(
          (course) => course._id !== action.payload.id,
        );
        return filteredCourses;
      })
      .addCase(
        createCourseInTheServer.fulfilled,
        (state, action) => action.payload,
      );
  },
});

export default coursesSlice.reducer;
