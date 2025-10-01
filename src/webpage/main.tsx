
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "../components/ui/provider"
import InformationModal from "../modals/informatonModal";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider >
        <welcomeModal/>
    </Provider>
  </React.StrictMode>
);