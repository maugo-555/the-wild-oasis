import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyleSheetManager shouldForwardProp={() => true}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleSheetManager>
);
