import { useState } from "react";
import { createChatCompletion } from "../api/aiService";
import logo from "../assets/logo-purple.png";
import CaptionList from "../components/chat/CaptionsList";
import ChatBubble from "../components/chat/ChatBubble";

export default function CaptionGenerator() {
    const [prompt, setPrompt] = useState("");
    const [captions, setCaptions] = useState<string[]>([]);

    const handleGenerateCaption = async () => {
        if (!prompt) return;

        const generatedCaptions = await createChatCompletion(prompt);
        setCaptions(generatedCaptions);
    };

    return (
        <div className="flex h-screen bg-gray-50 text-gray-800">
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="max-w-md w-full text-center">
                    <img
                        src={logo}
                        alt="MyAiBrand Logo"
                        className="mx-auto h-16 w-16 mb-4 rounded-full"
                    />

                    <h1 className="text-2xl font-semibold">Hi, I'm Captivate</h1>
                    <p className="text-gray-500">Write me a descriptive Prompt and I'll generate a caption</p>

                    <ChatBubble 
                        prompt={prompt} 
                        setPrompt={setPrompt} 
                        onGenerate={handleGenerateCaption} />


                    <CaptionList captions={captions} />
                </div>

                {/* Footer note */}
                <p className="text-sm text-gray-400 mt-6">AI-generated, for reference only</p>
            </main>
        </div>
    );
}
