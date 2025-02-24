import CtaSectionComponent from "../components/landing/CtaSectionComponent";
import FeaturesGrid from "../components/landing/FeaturesGrid";
import HeroSectionComponent from "../components/landing/HeroSectionComponent";
import PricingSectionComponent from "../components/landing/PricingSectionComponent";
import TestimonialComponent from "../components/landing/TestimonialComponent";

export default function LandingPage() {
    return (
        <div className="min-h-screen w-full">
            <HeroSectionComponent />
            <TestimonialComponent />
            <FeaturesGrid />
            <PricingSectionComponent />
            <CtaSectionComponent />
        </div>
    )
}