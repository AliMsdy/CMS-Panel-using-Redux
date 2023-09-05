import { useRoutes } from "react-router-dom";

import router from "./routes";

function App() {
  const Router = useRoutes(router);
  return (
    <div className="relative">
      <div className="mx-auto max-w-[95%] pt-4 md:max-w-[80%]">{Router}</div>
    </div>
  );
}

export default App;
