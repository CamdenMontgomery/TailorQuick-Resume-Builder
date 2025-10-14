import ReactDOM from "react-dom/client";
import ResumePreviewCover from "./components/cover/Cover";
import css from "./components/cover/Cover.css?inline";
import { Provider } from "./components/cover/provider";


//Add font import to head of light DOM because the shadow DOM has difficulties loading fonts
const style = document.createElement("style");
style.textContent = "@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');"
document.head.appendChild(style);

//Create root for our react shadow DOM
const appRoot = document.createElement("div");
appRoot.id = "inject-root"
document.body.prepend(appRoot)

//Create a shadow toor using the Provider wrapper.
//Add css as an inline style within the shadow DOM
ReactDOM.createRoot(appRoot).render(
  <Provider>
    <style>{css}</style>
    <ResumePreviewCover />
</Provider>
);