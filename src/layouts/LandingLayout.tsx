import { Outlet } from "react-router-dom";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";

export default function LandingLayout() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
