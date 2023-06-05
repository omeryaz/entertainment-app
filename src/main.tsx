import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from "./Context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GeneralProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralProvider>
  </React.StrictMode>
);
