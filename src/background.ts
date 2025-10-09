
import OpenAPIService from "./services/openAPIService";
import StorageService from "./services/storageService";


import "./App.css"




//Create context menu item to initiate resume generation
chrome.contextMenus.create({
    id: "GENERATE_TAILORED_RESUME", // A unique ID for the menu item
    title: "TailorTo",    // The text that will appear in the context menu
    contexts: ["selection"]        // Where the menu item should appear (e.g., "page", "selection", "image", "link")
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === "EXTRACT_JOB_TAGS") {
        OpenAPIService.extractJobTags(message.desc).then((res) => {
            sendResponse(res)
        })
    }
    if (message.type === "GENERATE_RESUME") {

        //Retrieve Full Potential Resume Data Json
        StorageService.getFullPotentialResumeData().then(async (data) => {
            console.log(data)
            if (!data) sendResponse(null)
            const resume = await OpenAPIService.GenerateResume(message.desc, JSON.stringify(data))
            console.log(resume)
            sendResponse(resume)
        })

    }
    return true;

});


//Handle TailorTo context menu button to begin generating
chrome.contextMenus.onClicked.addListener( async (info, tab) => {
    if (info.menuItemId === "GENERATE_TAILORED_RESUME") {

        console.log("Generating")

        //Handle 
        if (!info.selectionText || info.selectionText?.length < 500) return
        const transcript = await StorageService.load()
        const resume = await OpenAPIService.GenerateResume(info.selectionText, JSON.stringify(transcript))
        console.log(resume)

        chrome.scripting.executeScript({
            target: { tabId: tab?.id as number },
            func: () => {
                const script = document.createElement("script");
                script.type = "module";
                script.src = chrome.runtime.getURL("inject.js");
                document.head.appendChild(script);

                const cssUrl = chrome.runtime.getURL("Cover.css");
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssUrl;
                document.head.appendChild(link);
            },
        });


    }
});





