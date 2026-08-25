import { ArrowRight, Building2, CheckCircle2, UserRound } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const COMPANY_FEATURES = [
    "List products with custom commission rates",
    "Access a directory of independent sales reps",
    "Real-time sales & inventory tracking",
    "Order fulfillment & automation tools",
    "Talent search by specialization",
];

const SELLER_FEATURES = [
    "Discover high-margin commission products",
    "Generate unique tracking links instantly",
    "Full CRM for leads & pipeline management",
    "Performance dashboard & payout tracking",
    "Public professional profile & company directory",
];

export function ValueProps() {
    return (
        <section id="value-props" className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Companies Card */}
                <div className="p-10 rounded-3xl border border-line bg-surface flex flex-col h-full hover:border-brand/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-ink mb-4">
                        Scale your sales force without the overhead.
                    </h3>
                    <p className="text-lg text-mute mb-8">
                        Scale sales without hiring full-time staff. Connect with
                        a global network of specialized independent reps ready
                        to move your products.
                    </p>
                    <ul className="space-y-4 mb-10 grow">
                        {COMPANY_FEATURES.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-3 text-ink font-medium"
                            >
                                <CheckCircle2 className="w-5 h-5 text-brand mt-1 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#"
                        className={cn(
                            buttonVariants({
                                variant: "link",
                                size: "sm",
                                className:
                                    "inline-flex items-center gap-2 font-bold text-brand hover:gap-3 transition-all mr-auto text-base p-0 hover:no-underline",
                            }),
                            "text-brand",
                        )}
                    >
                        Build your sales force{" "}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Sellers Card */}
                <div className="p-10 rounded-3xl border border-line bg-ink flex flex-col h-full hover:border-brand/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <UserRound className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                        The professional OS for independent sellers.
                    </h3>
                    <p className="text-lg text-faint mb-8">
                        Earn commissions with professional-grade tools. No more
                        spreadsheets—Salesfam gives you everything you need to
                        close deals at scale.
                    </p>
                    <ul className="space-y-4 mb-10 grow">
                        {SELLER_FEATURES.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-3 text-white font-medium"
                            >
                                <CheckCircle2 className="w-5 h-5 text-brand mt-1 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#"
                        className={cn(
                            buttonVariants({
                                variant: "link",
                                size: "sm",
                                className:
                                    "inline-flex items-center gap-2 font-bold text-brand hover:gap-3 transition-all mr-auto text-base p-0 hover:no-underline",
                            }),
                            "text-brand ",
                        )}
                    >
                        Start selling today <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
