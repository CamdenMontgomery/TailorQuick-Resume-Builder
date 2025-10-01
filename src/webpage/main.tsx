
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as ChkrProvider } from "../components/ui/provider"
import { Provider as RdxProvider } from "react-redux"
import BuilderPage from "../pages/BuilderPage";
import { store } from "../store";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RdxProvider store={store}><ChkrProvider>
        <BuilderPage/>
    </ChkrProvider></RdxProvider>
  </React.StrictMode>
);