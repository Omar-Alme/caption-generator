import { Link } from "react-router-dom";

export default function HeroSectionComponent() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-black text-white">
            {/* Top floating gradient shape */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 pointer-events-none transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
                        rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-600 opacity-30 
                        sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, \
72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, \
27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-400/50 hover:ring-gray-400/80">
                        Announcing something exciting.{" "}
                        <a href="#" className="font-semibold text-indigo-400 ml-1">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

                {/* Main heading + paragraph */}
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl">
                        AI Powered Caption Generator
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Transform your social media presence with our intelligent caption generator.
                        Create compelling, on-brand captions in seconds and engage your audience like never before.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold 
                                    text-white shadow-sm hover:bg-indigo-500
                                    focus-visible:outline-2 focus-visible:outline-offset-2 
                                    focus-visible:outline-indigo-600"
                        >
                            Join Waitlist
                        </a>
                        <Link to="/generator" className="text-sm font-semibold leading-6 text-gray-100 hover:text-indigo-400">
                            Try Demo <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute pointer-events-none inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu 
                    overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] 
                        -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-600 
                        opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, \
                            72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, \
                            27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    )
}