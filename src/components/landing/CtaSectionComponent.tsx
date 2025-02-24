import { useState } from 'react';

export default function CtaSectionComponent() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [joined, setJoined] = useState(false);

    const validateEmail = (email: string) => {
        // Simple email regex validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleJoinWaitlist = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        setError('');
        setJoined(true);
    };

    return (
        <section className="py-16 px-4 bg-black text-white">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Ready to Elevate Your Captions?</h2>
                <p className="mt-4 text-gray-400">
                    Join our waitlist for exclusive early access or try our demo now!
                </p>
                {joined ? (
                    <p className="mt-8 text-lg font-semibold text-green-400">
                        Thank you for joining our waitlist!
                    </p>
                ) : (
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:w-auto px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            onClick={handleJoinWaitlist}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold shadow"
                        >
                            Join Waitlist
                        </button>
                        <button className="bg-black border border-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold shadow">
                            Try Demo
                        </button>
                    </div>
                )}
                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
            </div>
        </section>
    );
}
