import { configureStore } from "@reduxjs/toolkit";
//reducers
import articlesReducer from "../features/articles/articles";
import coursesReducer from "../features/courses/courses";
import usersReducer from "../features/users/users";
import categoriesReducer from "../features/categories/category";

const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    articles: articlesReducer,
    categories: categoriesReducer
  },
});
export default store;
