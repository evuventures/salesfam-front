const STEPS = [
    {
        number: 1,
        title: "Sign Up",
        description: "Join as a Company or independent Seller in minutes.",
    },
    {
        number: 2,
        title: "Connect",
        description:
            "Companies list products & commissions. Sellers browse and apply.",
    },
    {
        number: 3,
        title: "Promote",
        description:
            "Sellers get unique links and start closing deals with built-in tools.",
    },
    {
        number: 4,
        title: "Track & Payout",
        description:
            "Salesfam handles real-time tracking and automated payouts.",
    },
];

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-surface py-32 border-y border-line"
        >
            <div className="max-w-site mx-auto px-6 text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                    Simple. Transparent. Scalable.
                </h2>
                <p className="text-xl text-mute mt-4">
                    Four steps to launch your next distribution channel.
                </p>
            </div>
            <div className="max-w-site mx-auto px-6 grid md:grid-cols-4 gap-12 relative">
                {STEPS.map((step) => (
                    <div key={step.number} className="relative space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-line shadow-sm flex items-center justify-center text-2xl font-bold text-brand mx-auto md:mx-0">
                            {step.number}
                        </div>
                        <div className="space-y-2 text-center md:text-left">
                            <h4 className="text-xl font-bold text-ink">
                                {step.title}
                            </h4>
                            <p className="text-mute">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
