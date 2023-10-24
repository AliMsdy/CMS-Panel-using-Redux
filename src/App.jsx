import { useRoutes } from "react-router-dom";

import router from "./routes";
import { Stack } from "@mui/material";

function App() {
  const Router = useRoutes(router);
  return (
    <Stack className="relative" sx={{ bgcolor: "background.default" }}>
      <div className="mx-auto max-w-[95%] pt-4 md:max-w-[80%]">{Router}</div>
    </Stack>
  );
}

export default App;
