
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as ChkrProvider } from "../components/ui/provider"
import { Provider as RdxProvider } from "react-redux"
import BuilderPage from "../pages/BuilderPage";
import "../App.css"
import StorageService from "../services/storageService";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";

const stored = await StorageService.load()
const store = configureStore({
  reducer: rootReducer,
  preloadedState: stored
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RdxProvider store={store}><ChkrProvider>
        <BuilderPage/>
    </ChkrProvider></RdxProvider>
  </React.StrictMode>
);