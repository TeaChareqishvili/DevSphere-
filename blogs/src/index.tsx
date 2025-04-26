import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import FavoriteBlogProvider from "./context/Store/StoreProvider";
import ThemeProvider from "./context/Theme/ThemeProvider";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY!;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeProvider>
        <FavoriteBlogProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoriteBlogProvider>
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);
