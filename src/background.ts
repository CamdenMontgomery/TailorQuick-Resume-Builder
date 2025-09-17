import OpenAPIService from "./services/openAPIService";
import StorageService from "./services/storageService";

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === "EXTRACT_JOB_TAGS") {
        OpenAPIService.extractJobTags(message.desc).then((res) => {
            sendResponse(res)
        })
    }
    if (message.type === "GENERATE_RESUME") {

        //Retrieve Full Potential Resume Data Json
        StorageService.getFullPotentialResumeData().then(async (data) => 
            {
                console.log(data)
                if (!data) sendResponse(null)
                const resume = await OpenAPIService.GenerateResume(message.desc,JSON.stringify(data))
            console.log(resume)
                sendResponse(resume)
            })
        
    }
   return true; 
  
});



