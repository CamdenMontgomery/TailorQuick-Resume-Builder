//Methods meant to be called from the content script to interact with background.js for proper http request
export default class TunnelService {

    static getJobTagsTunneled(jobDescription: string) {
        chrome.runtime.sendMessage(
            { type: "EXTRACT_JOB_TAGS", desc: jobDescription },
            (response) => {
                console.log("AI says:", response);
                return response
            }
        );
    }

    static generateResumeTunneled(jobDescription: string){
        chrome.runtime.sendMessage(
            { type: "GENERATE_RESUME", desc: jobDescription },
            (response) => {
                console.log("AI says:", response);
                return response
            }
        );
    }

}