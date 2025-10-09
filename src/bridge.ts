import type { IResume } from "./interfaces/IResume";
import type { ResumePreviewMessageTypes } from "./types/ResumePreviewMessageTypes";


//PAGE <- BRIDGE <- BACKGROUND
function handleMessages(message : {type: ResumePreviewMessageTypes, payload?: IResume}, _sender : any, _sendResponse : any) {
    window.postMessage(message,window.location.origin)
    return false;
}

chrome.runtime.onMessage.addListener(handleMessages);