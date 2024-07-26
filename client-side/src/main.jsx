import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import CounterContextProvider from "./context/CounterContextProvider.jsx";
import SessionContextProvider from "./context/SessionContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </SessionContextProvider>
  </React.StrictMode>
);
