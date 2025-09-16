import OpenAPIService from "./services/openAPIService";

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === "EXTRACT_JOB_TAGS") {
        OpenAPIService.extractJobTags(message.desc).then((res) => {
            sendResponse(res)
        })
    }
    if (message.type === "GENERATE_RESUME") {


        //Retrieve User Resume Data Json
        


        OpenAPIService.extractJobTags(message.desc).then((res) => {
            sendResponse(res)
        })
    }
   return true; 
  
});



