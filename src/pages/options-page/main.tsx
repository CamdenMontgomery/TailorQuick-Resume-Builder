
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as RdxProvider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ChkrProvider } from "./snippets/provider"

import BuilderPage from "./OptionsPage";
import StorageService from "../../shared/services/storageService";
import rootReducer from "../web-page/reducer";

import "./options.css"

//[State Management] Redux store configuration with persisted state
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