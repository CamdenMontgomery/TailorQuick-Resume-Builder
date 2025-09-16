import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export default class OpenAPIService {
    static async extractJobTags(jobDescription: string) {
        const response = await client.chat.completions.create({
            model: "gpt-5-nano-2025-08-07",
            messages: [
                {
                    role: "system",
                    content: "You are a resume assistant that generates tags from job description data. You will intake a detailed job description and will output a JSON object in the structure of {tag: priority (1-5)}. You will only generate simple and common tags. Be thorough, collect as many tags as possible.",
                },
                {
                    role: "user",
                    content: `Job Description:\n\n${jobDescription}`,
                },
            ],
            response_format: { type: "json_object" } // ensures valid JSON
        });

        return JSON.parse(response.choices[0].message?.content || "{}");
    }

    static async GenerateResume(jobDescription: string, data: {}) {

        const ROLE_DESC = `
            You are a resume assistant.  

            Input:  
            - A detailed JSON object containing the user's full resume information.  
            - A job description.  

            Task:  
            - Remove any portions of the JSON that are not relevant to the job description.  
            - Keep only the information that directly supports the job description.  
            - Limit each section (Experience, Education, Projects, Skills, etc.) to a maximum of 4 bullets each.  
            - Do not rewrite, reword, or generate new text. Only delete or rearrange existing JSON entries.  
            - Ensure the final JSON content is short enough to fit on a one-page resume.  
            - Return a valid JSON object as the final output.  

            Output:  
            - A valid JSON object containing only the relevant, reduced resume.  
            `



        const response = await client.chat.completions.create({
            model: "gpt-5-nano-2025-08-07",
            messages: [
                {
                    role: "system",
                    content: ROLE_DESC,
                },
                {
                    role: "user",
                    content: `Job Description:\n\n${jobDescription}\n\nData:\n\n${data}`,
                },
            ],
            response_format: { type: "json_object" } // ensures valid JSON
        });

        return JSON.parse(response.choices[0].message?.content || "{}");
    }
}