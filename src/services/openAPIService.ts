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
            - A detailed JSON object containing a user transcript which is user's full resume information.  
            - A job description.  
            - Dates will be given as unix timestamps

            Task:  
            - Remove any portions of the JSON that are not relevant to the job description.  
            - Keep only the information that directly supports the job description.  
            - Limit each section (Experience, Education, Projects, Skills, etc.) to a maximum of 4 bullets each.  
            - Do not rewrite, reword, or generate new text. Only delete or rearrange existing JSON entries.  
            - Ensure the final JSON content is short enough to fit on a one-page resume.  
            - Reorder the four section in the section array to highlight important information first
            - Return a valid JSON object as the final output.  
            - If there is any reason for error, set the error field to true and write the cause in the errorMessage field
            - Include all relevant dates provided
            - Provide a job relevance score between 0 and 1 which considers whether the resume contains all the same keywords as the job description, whether there is enough infomration provided on the resume or the lack there of, and your unbiased guess as to the chances of this resume making it to the interview phase
            - provide three concise (15 words or less) suggestions on how the user can improve their resume generation by enhancing their transcript. Do not advise them to make improvements on the resume you provide but on how to make improvements by disclosing more infromation about themselves.

            Output:  
            - A valid JSON object containing the reduced resume which adheres to the following format. 
            - Dates should be as unix timestamps 
            
            Output Format:

            {
                resume: {
                    profile: {
                        firstName: string,
                        lastName: string,
                        email: string,
                        phone: string,
                        github?: string,
                        linkedin?: string,
                        portfolio?: string
                    },
                    sections: [
                        {type: "EDUCATION", data: {
                            school: string,
                            degree: string,
                            field: string,
                            startDate?: number,
                            endDate?: number,
                            bullets?: string[] 
                        }[]
                        },
                        {type: "EXPERIENCE", data: {
                            position: string,
                            company: string,
                            startDate?: number,
                            endDate?: number,
                            bullets?: string[] 
                        }[]
                        },
                        {type: "PROJECTS", data: {
                            title: string,
                            startDate?: number,
                            endDate?: number,
                            bullets?: string[] 
                        }[]
                        },
                        {type: "SKILLS", data: string[]},
                    ]
                },
                info: {
                    relevance: number,
                    suggestions: string[]
                }
                metadata: {
                    error: boolean,
                    errorMessage?: string
                }
            }
            
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