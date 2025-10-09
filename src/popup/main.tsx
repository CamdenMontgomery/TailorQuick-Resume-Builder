import React from "react";
import ReactDOM from "react-dom/client";
import ResumePreviewCover from "../components/cover/Cover";
import { Provider } from "../components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
          <ResumePreviewCover></ResumePreviewCover>
    </Provider>

  </React.StrictMode>
);