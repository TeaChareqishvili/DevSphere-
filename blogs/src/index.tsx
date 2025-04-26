import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import FavoriteBlogProvider from "./context/Store/StoreProvider";
import ThemeProvider from "./context/Theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoriteBlogProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteBlogProvider>
    </ThemeProvider>
  </React.StrictMode>
);
