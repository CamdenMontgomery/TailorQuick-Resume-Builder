

import ReactDOM from "react-dom/client";
import { Provider as ChkrProvider } from "./components/ui/provider"
import { Text } from "@chakra-ui/react"

//Has to be in this file and then properly compiled and bundled by vite, the resulting bundled file can then be referenced and injected by the background script
//If this same code is written directly into the background script it does not get properly compiled
/*Must share assets for injection to work because vite was shared imports stored there that need to be accessed by inject.js*/
//Inject React Root Into Page
const body = document.getElementsByTagName('body')[0]
const injection = document.createElement('div')
injection.id = "injected-root"

body.prepend(injection)
alert("injected")



ReactDOM.createRoot(document.getElementById("injected-root")!).render(
    <ChkrProvider>
        <Text>Hello World</Text>
    </ChkrProvider>
);