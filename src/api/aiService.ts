import { axiosApi } from "./axiosApi";

//create-chat-completion endpoint.
interface DeepSeekChatRequest {
    model: string;
    messages: {
        role: "user" | "assistant" | "system";
        content: string;
    }[];
    temperature?: number;
    max_tokens?: number;
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
            model: "deepseek-chat",
            "messages": [
                {
                    "content": "You are an AI caption generator for Social media, Generate me you're 5 best captions.",
                    "role": "system"
                },
                {
                    "content": prompt,
                    "role": "user"
                }
            ],
            temperature: 0.7,
            max_tokens: 100,
        };

        // API KEY
        const apiKey = import.meta.env.DEEPSEEK_API_KEY;

        const response = await axiosApi.post<DeepSeekChatResponse>(
            "/v1/chat/completions",
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