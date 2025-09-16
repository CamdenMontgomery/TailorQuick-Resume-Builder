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
}