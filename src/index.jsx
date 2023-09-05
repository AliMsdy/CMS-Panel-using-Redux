import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

// import { Provider } from "react-redux";

// import store from "./Redux/store";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <StyledEngineProvider injectFirst> */}
    <App />
    {/* </StyledEngineProvider> */}
  </BrowserRouter>,
);
