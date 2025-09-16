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

}