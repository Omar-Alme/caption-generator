// src/components/Sidebar.tsx
import { ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
            <div className="mb-8">
                <img
                    src="https://randomuser.me/api/portraits/lego/2.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                />
            </div>
            {/* Nav links */}
            <NavLink
                to="/generator"
                className={({ isActive }) =>
                    `mb-6 p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center ${isActive ? 'bg-gray-200 text-indigo-600' : 'text-gray-500'
                    }`
                }
            >
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
            </NavLink>
            <NavLink
                to="/favorites"
                className={({ isActive }) =>
                    `p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center ${isActive ? 'bg-gray-200 text-indigo-600' : 'text-gray-500'
                    }`
                }
            >
                <StarIcon className="w-6 h-6" />
            </NavLink>
            {/* Exit Nav Link */}
            <NavLink
                to="/"
                className="mt-auto p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </NavLink>
        </aside>
    );
}
