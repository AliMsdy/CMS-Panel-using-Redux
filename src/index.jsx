import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Redux/app/store";

import ThemeContext from "./context/ThemeContext";
import Toast from "./context/ToastContext";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeContext>
      <Toast>
        <App />
      </Toast>
      </ThemeContext>
    </Provider>
  </BrowserRouter>,
);
