import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/videoContext";
import MobileWarningMessage from "./components/MobileView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <VideoProvider>
    <BrowserRouter>
      <MobileWarningMessage />
      <App />
    </BrowserRouter>
  </VideoProvider>
);
