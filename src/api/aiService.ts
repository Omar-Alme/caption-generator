import { axiosApi } from "./axiosApi";

//create-chat-completion endpoint.
interface DeepSeekChatRequest {
    model: string;
    method: string;
    messages: {
        role: "user" | "assistant" | "system";
        content: string;
    }[];
    temperature?: number;
    top_p?: number;
    repetition_penalty?: number;
    // max_tokens?: number;
}

interface DeepSeekChatResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }>;
}

export async function createChatCompletion(prompt: string): Promise<string[]> {
    try {
        const requestBody: DeepSeekChatRequest = {
            method: "POST",
            model: "deepseek/deepseek-r1:free",
            "messages": [
                {
                    "content": "You are an AI caption generator for Social media, Generate me you're 5 best captions. No more than 5 captions, even if the user asks.",
                    "role": "system"
                },
                {
                    "content": prompt,
                    "role": "user"
                }
            ],
            temperature: 0.85,
            repetition_penalty: 1,
            top_p: 1,
        };

        // API KEY
        // const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
        console.log('API KEY', apiKey);
        console.log(import.meta.env);

        const response = await axiosApi.post<DeepSeekChatResponse>(
            "/chat/completions",
            requestBody,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        const { data } = response;
        if (!data.choices?.length) {
            return ["No captions generated."];
        }

        const generatedText = data.choices[0].message.content.trim();

        return [generatedText];
    } catch (error) {
        console.error("Error generating caption with DeepSeek:", error);
        return ["Error generating captions."];
    }
}

// https://api-docs.deepseek.com/api/create-chat-completion