
export default function ChatBubble() {
    return (
        <div className="mt-6 bg-white border border-gray-200 shadow rounded-full px-4 py-3 flex items-center space-x-3">
            <span className="text-gray-400">Message MyAIbrand</span>

            <div className="ml-auto flex items-center space-x-2">

                <button className="bg-gray-600 px-3 py-1 rounded-full text-sm text-white font-semibold transition hover:bg-gray-500">
                    Generate
                </button>
                
            </div>
        </div>
    )
}