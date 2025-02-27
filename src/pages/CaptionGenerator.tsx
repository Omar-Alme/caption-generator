import { useState } from "react";
import { createChatCompletion } from "../api/aiService";
import logo from "../assets/logo-purple.png";
import CaptionList from "../components/chat/CaptionsList";
import ChatBubble from "../components/chat/ChatBubble";

export default function CaptionGenerator() {
    const [prompt, setPrompt] = useState("");
    const [captions, setCaptions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleGenerateCaption = async () => {
        if (!prompt) return;

        setLoading(true);
        const generatedCaptions = await createChatCompletion(prompt);
        setCaptions(generatedCaptions);
        setLoading(false);
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

                    {/* Loading state */}
                    {loading && (
                        <div className="flex items-center justify-center mt-4 space-x-2">
                            <svg className="animate-spin h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <p className="text-gray-400 font-semibold">
                                Hold on, magic is happening! Your captions are being generated...
                            </p>
                        </div>
                    )}

                    {/* Captions list */}
                    <CaptionList captions={captions} />
                </div>

                {/* Footer note */}
                <p className="text-sm text-gray-400 mt-6">AI-generated, for reference only</p>
            </main>
        </div>
    );
}
