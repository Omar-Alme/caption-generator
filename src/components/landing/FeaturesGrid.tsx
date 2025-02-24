export default function FeaturesGrid() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base font-semibold text-indigo-600">
                    Unlock Your Social Potential
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Elevate Your Captions with AI
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    {/* Grid Item 1: AI-Powered Captions */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-900 lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                                    AI-Powered Captions
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-400 max-lg:text-center">
                                    Instantly generate engaging, on-brand captions with our state-of-the-art AI engine.
                                </p>
                            </div>
                            <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="w-full object-cover object-top"
                                        src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                        alt="AI-Powered Captions"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>

                    {/* Grid Item 2: Customizable Tone */}
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-gray-900 max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                                    Customizable Tone
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-400 max-lg:text-center">
                                    Adjust the style of your captions—from professional to playful—to perfectly match your brand’s voice.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png"
                                    alt="Customizable Tone"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>

                    {/* Grid Item 3: Cross-Platform Integration */}
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-gray-900"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                                    Cross-Platform Integration
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-400 max-lg:text-center">
                                    Seamlessly share your generated captions across Instagram, Twitter, LinkedIn, and more.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] object-cover"
                                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                                    alt="Cross-Platform Integration"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>

                    {/* Grid Item 4: Analytics & Insights */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-900 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                                    Analytics & Insights
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-400 max-lg:text-center">
                                    Monitor engagement in real-time and gain actionable insights to continuously improve your content strategy.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm font-medium text-gray-400">
                                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                Dashboard
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">
                                                Captions
                                            </div>
                                            <div className="px-4 py-2">Impressions</div>
                                            <div className="px-4 py-2">Favorites</div>

                                        </div>
                                    </div>
                                    <div className="px-6 pt-6 pb-14">
                                        <img src="https://cdn.dribbble.com/userupload/11757495/file/original-e65b85589c7c2bdfe543b5cbea9ac091.png?resize=1024x768&vertical=center" alt="Analytics Dashboard Illustration"
                                            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>)
}