import { Link } from "react-router-dom";
import { CtaBtn } from "./buttons/CtaBtn";
import { TryDemoBtn } from "./buttons/TryDemoBtn";
import Navbar from "./Navbar";

import logo from "../../assets/captivate.png";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
            {/* <div className="text-xl font-bold">MyAIBrand</div> */}
            <img src={logo} className="h-15 contrast-150" alt="" />
            <Navbar />
            <div className="space-x-4 hidden md:block">
                <CtaBtn>Book a call</CtaBtn>
                <Link to="/generator">
                    <TryDemoBtn>Try Demo</TryDemoBtn>
                </Link>
            </div>
        </header>
    );
}
