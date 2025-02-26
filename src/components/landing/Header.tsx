import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/captivate.png";
import { CtaBtn } from "./buttons/CtaBtn";
import { TryDemoBtn } from "./buttons/TryDemoBtn";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white">
            <div className="flex items-center justify-between px-8 py-4">
                <img src={logo} alt="" className="h-15 contrast-150" />

                <div className="space-x-4 hidden md:block">
                    <CtaBtn>Book a call</CtaBtn>
                    <Link to="/generator">
                        <TryDemoBtn>Try Demo</TryDemoBtn>
                    </Link>
                </div>

                <button
                    className="md:hidden p-2 rounded bg-gray-800 text-gray-200 hover:text-gray-100 hover:bg-gray-700 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>

            <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/70 backdrop-blur-sm rounded-full px-8 py-3 space-x-6">
                <a href="#" className="text-white hover:text-gray-400">
                    Resources
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                    Pricing
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                    Blog
                </a>
            </nav>

            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-900/70 backdrop-blur-sm px-8 py-4 space-y-4">
                    <nav className="flex flex-col space-y-2">
                        <a href="#" className="text-white hover:text-gray-400">
                            Resources
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            Pricing
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            Blog
                        </a>
                    </nav>
                    <div className="flex flex-col space-y-2">
                        <CtaBtn>Book a call</CtaBtn>
                        <Link to="/generator">
                            <TryDemoBtn>Try Demo</TryDemoBtn>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
