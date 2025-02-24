import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
        name: 'Free',
        id: 'tier-free',
        href: '#',
        priceMonthly: '$0',
        description: "Try our AI caption generator for free with essential features.",
        features: ['5 daily captions', 'Basic tone options', 'Limited analytics'],
        featured: false,
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        href: '#',
        priceMonthly: '$29',
        description: 'Unlock unlimited captions and advanced customization for your posts.',
        features: [
            'Unlimited captions',
            'Customizable tone options',
            'Advanced analytics',
            'Multi-platform integration',
        ],
        featured: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: 'Custom',
        description: 'Tailored solutions for large teams and agencies with dedicated support.',
        features: [
            'All Pro features',
            'Dedicated account manager',
            'Custom integrations',
            'Premium support',
        ],
        featured: false,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function PricingSectionComponent() {
    return (
        <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    Choose the right plan for your social strategy
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-400 sm:text-xl">
                Select a plan that scales your content creation with AI-powered caption generation.
            </p>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-gray-800/60',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base font-semibold')}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-white' : 'text-white',
                                    'text-5xl font-semibold tracking-tight'
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                        </p>
                        <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-400', 'mt-6 text-base')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-400',
                                'mt-8 space-y-3 text-sm sm:mt-10'
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 focus-visible:outline-none'
                                    : 'bg-gray-800 text-indigo-400 hover:bg-gray-700 focus-visible:outline-none',
                                'mt-8 block rounded-lg px-4 py-3 text-center text-sm font-bold transition transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 sm:mt-10'
                            )}
                        >
                            Join Waitlist
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
