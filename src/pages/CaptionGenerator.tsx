import CaptionList from "../components/chat/CaptionsList";
import ChatBubble from "../components/chat/ChatBubble";

export default function CaptionGenerator() {

    const demoCaptions = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ];

    return (
        <div className="flex h-screen bg-gray-50 text-gray-800">
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="max-w-md w-full text-center">
                    <img
                        src="https://via.placeholder.com/64x64.png"
                        alt="MyAiBrand Logo"
                        className="mx-auto h-16 w-16 mb-4 rounded-full"
                    />

                    <h1 className="text-2xl font-semibold">Hi, I'm MyAIBrand.</h1>
                    <p className="text-gray-500">Write me a descriptive Prompt and I'll generate a caption</p>

                    <ChatBubble />

                    <CaptionList captions={demoCaptions} />
                </div>

                {/* Footer note */}
                <p className="text-sm text-gray-400 mt-6">AI-generated, for reference only</p>
            </main>
        </div>
    );
}
