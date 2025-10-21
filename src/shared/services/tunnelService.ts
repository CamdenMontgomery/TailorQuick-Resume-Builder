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

    static async generateResumeTunneled(jobDescription: string): Promise<{}> {
        return new Promise((resolve) => {
            chrome.runtime.sendMessage(
                { type: "GENERATE_RESUME", desc: jobDescription },
                (response: {} | undefined) => {
                    if (chrome.runtime.lastError) {
                        console.error("Error from background:", chrome.runtime.lastError);
                        resolve({}); // default return on error
                        return;
                    }
                    resolve(response ?? {}); // return response or default
                }
            );
        });
    }

}