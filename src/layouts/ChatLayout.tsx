// src/layouts/ChatLayout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/chat/Sidebar';

export default function ChatLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex text-gray-800">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
        </div>
    );
}
