import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export default class OpenAPIService {
    static async extractJobTags(jobDescription: string) {
        const response = await client.chat.completions.create({
            model: "gpt-5-mini-2025-08-07",
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
            You are a resume assistant. You are tasked with filtering, rearranging, and slightly modifying information about a user and return a JSON object representing a concise, one page resume generated from the data provided. 

            Input:  
            - You will be given a JSON object containing everything you need to know about the user
            - You will be given a job description


            Task:  
            
            - You will determine a heirarchy of most relevant information to least relevant information
            - You will remove the least relevant information until the content is less than the size of one page 
            - You will fill in the output JSON with any information from the input JSON which is relevant to the input job description
            - You will generate a relevance score by assessing the effectiveness of the output resume 
            - You will, in case of error, set the output error field to true and fill out the errorMessage field with an appropriate message
            - You will fill the highlights field with important keywords from the projects section
            - You will generate groups of skills and give them appropriate labels
            - You will provide 3 suggestions as to how the user can add certain data to their transcript to improve their potential resumes
            - You will attempt to format bullet points into STAR form
            - You will ever only slightly modify the text to make it more concise
            - You will not generate new information or make assumptions about the user

            Specification:
            - You will ensure the output JSON does not exceed 3000 characters
            - You will ensure all dates are in UNIX time
            - You will ensure no bulleted list has more than 4 bullet points
            - You will ensure bullets do not exceed 200 characters
            - You will ensure the relevance score is between 0-1
            - You will ensure the suggestions are 15 words or less



            Output:  
            - You will output a valid JSON object containing the reduced resume which adheres to the following format. 
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
                        {type: "SKILLS", data: {
                            label: string, 
                            skills: string[] 
                        }[]
                        },
                    ]
                },
                info: {
                    relevance: number,
                    suggestions: string[]
                }
                metadata: {
                    error: boolean,
                    errorMessage?: string,
                    highlights: string[]
                }
            }
            
            `




        const response = await client.chat.completions.create({
            model: "gpt-5-mini-2025-08-07",
            messages: [
                {
                    role: "system",
                    content: ROLE_DESC,
                },
                {
                    role: "user",
                    content: `Data:\n\n${data}\n\nJob Description:\n\n${jobDescription}`,
                },
            ],
            response_format: { type: "json_object" } // ensures valid JSON
        });

        return JSON.parse(response.choices[0].message?.content || "{}");
    }
}