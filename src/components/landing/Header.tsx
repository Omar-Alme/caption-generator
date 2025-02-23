import { Link } from "react-router-dom";
import { CtaButton } from "./buttons/CtaButton";
import { GetStartedButton } from "./buttons/GetStartedButton";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
            <div className="text-xl font-bold">MyAIBrand</div>
            <Navbar />
            <div className="space-x-4 hidden md:block">
                <CtaButton>Book a call</CtaButton>
                <Link to="/generator">
                    <GetStartedButton>Get started</GetStartedButton>
                </Link>
            </div>
        </header>
    );
}
