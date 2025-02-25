import { StarIcon } from '@heroicons/react/20/solid';
import { useFavorites } from '../../providers/FavoriteCaptionProvider';

interface CaptionListProps {
    captions: string[];
}

export default function CaptionList({ captions }: CaptionListProps) {
    const {addFavorite} = useFavorites();
    return (
        <div className="space-y-4 mt-8">
            {captions.map((caption, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                    <span>{caption}</span>
                    <button
                        onClick={() => addFavorite(caption)}
                        className="text-gray-400 hover:text-yellow-500 transition"
                    >
                        <StarIcon className="w-5 h-5 ml-1" />
                    </button>
                </div>
            ))}
        </div>
    );
}
