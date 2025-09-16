import OpenAPIService from "./services/openAPIService";

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === "EXTRACT_JOB_TAGS") {
        OpenAPIService.extractJobTags(message.desc).then((res) => {
            console.log(res)
            sendResponse(res)
        })

    return true; 
  }
});