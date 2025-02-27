import { StarIcon } from "@heroicons/react/20/solid";
import { useFavorites } from "../../providers/FavoriteCaptionProvider";

interface CaptionListProps {
    captions: string[];
}

export default function CaptionList({ captions }: CaptionListProps) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    return (
        <div className="space-y-6 mt-8">
            {captions.map((caption, index) => {
                const isDisabled =
                    caption === "No captions generated." ||
                    caption === "I'm sorry, I can only generate captions.";
                const isFavorited = favorites.includes(caption);

                return (
                    <div
                        key={index}
                        className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200"
                    >
                        <span className="text-gray-800 text-base">{caption}</span>
                        {!isDisabled && (
                            <button
                                onClick={() =>
                                    isFavorited ? removeFavorite(caption) : addFavorite(caption)
                                }
                                className={`transition transform hover:scale-110 focus:outline-none ${isFavorited
                                        ? "text-indigo-600"
                                        : "text-gray-400 hover:text-indigo-600"
                                    }`}
                            >
                                <StarIcon className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
