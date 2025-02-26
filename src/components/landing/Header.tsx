import { Link } from "react-router-dom";
import { CtaBtn } from "./buttons/CtaBtn";
import { TryDemoBtn } from "./buttons/TryDemoBtn";

import logo from "../../assets/captivate.png";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
            {/* <div className="text-xl font-bold">MyAIBrand</div> */}
            <img src={logo} className="h-15 contrast-150" alt="" />
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/70 backdrop-blur-sm rounded-full px-8 py-3 space-x-6 hidden md:flex">
                <a href="#" className="text-white hover:text-gray-400">
                    Resources
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                    Pricing
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                    Blog
                </a>
            </nav>            <div className="space-x-4 hidden md:block">
                <CtaBtn>Book a call</CtaBtn>
                <Link to="/generator">
                    <TryDemoBtn>Try Demo</TryDemoBtn>
                </Link>
            </div>
        </header>
    );
}
