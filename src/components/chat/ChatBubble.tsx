interface ChatBubbleProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onGenerate: () => void;
}

export default function ChatBubble({ prompt, setPrompt, onGenerate }: ChatBubbleProps) {
    return (
        <div className="mt-6 bg-white border border-gray-200 shadow rounded-full px-4 py-3 flex items-center space-x-3">
            <input
                type="text"
                className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                placeholder="Message MyAIbrand"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onGenerate()}
            />

            <div className="ml-auto flex items-center space-x-2">

                <button onClick={onGenerate} className="bg-indigo-600 cursor-pointer px-3 py-1 rounded-full text-sm text-white font-semibold transition hover:bg-indigo-500">
                    Generate
                </button>

            </div>
        </div>
    )
}