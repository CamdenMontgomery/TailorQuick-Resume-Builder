
import OpenAPIService from "./shared/services/openAPIService";
import StorageService from "./shared/services/storageService";





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



chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url &&  tab.url.startsWith('http')) {
         chrome.scripting.executeScript({
            target: { tabId: tab?.id as number },
            func: () => {
                const script = document.createElement("script");
                script.type = "module";
                script.src = chrome.runtime.getURL("inject.js");
                document.head.appendChild(script);

                /*const cssUrl = chrome.runtime.getURL("Cover.css");
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssUrl;
                document.head.appendChild(link);
                */
            },
        });
  }
});



//Handle TailorTo context menu button to begin generating
chrome.contextMenus.onClicked.addListener( async (info, tab) => {

    if (!tab?.id) return

    if (info.menuItemId === "GENERATE_TAILORED_RESUME") {

        console.log("Generating")


        //Handle 
        if (!info.selectionText || info.selectionText?.length < 500) return


        await chrome.tabs.sendMessage(tab.id,{type: "NOTIFY_STORAGE_LOAD_START"});
        const transcript = await StorageService.load()

        await chrome.tabs.sendMessage(tab.id,{type: "NOTIFY_RESUME_GENERATE_START"});
        const res = await OpenAPIService.GenerateResume(info.selectionText, JSON.stringify(transcript))
        console.log(res)
        
        if (res.metadata.error) await chrome.tabs.sendMessage(tab.id,{type: "ERROR", payload: res.metadata.errorMessage});
        else await chrome.tabs.sendMessage(tab.id,{type: "PASS_RESUME_DATA", payload: res});
        


    }
});





