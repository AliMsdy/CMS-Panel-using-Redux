import { configureStore } from "@reduxjs/toolkit";
//reducers
import articlesReducer from "../features/articles/articles";
import coursesReducer from "../features/courses/courses";
import usersReducer from "../features/users/users";

const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    articles: articlesReducer,
  },
});
export default store;
