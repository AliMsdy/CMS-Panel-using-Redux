import { useRoutes } from "react-router-dom";

import router from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersFromServer } from "./Redux/features/users/users";
import { Stack } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFromServer());
  }, []);
  const Router = useRoutes(router);
  return (
    <Stack className="relative" sx={{ bgcolor: "background.default" }}>
      <div className="mx-auto max-w-[95%] pt-4 md:max-w-[80%]">{Router}</div>
    </Stack>
  );
}

export default App;
