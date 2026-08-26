import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

export default function Hero() {
	return (
		<section
			id="hero"
			className="max-w-site mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
		>
			<div className="space-y-8 md:space-y-10 text-center lg:text-left">
				<Badge className="inline-flex items-center gap-2 px-4 py-3.5 border-brand/20 bg-brand/5 text-[10px] md:text-xs font-bold tracking-wide uppercase text-brand">
					<span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
					Next-Gen Sales Distribution
				</Badge>
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink leading-[1.1]">
					The bridge between <span className="text-brand">Companies</span> and{" "}
					<span className="text-brand">Top Sellers.</span>
				</h1>
				<p className="text-lg md:text-xl text-mute max-w-lg mx-auto lg:mx-0 leading-relaxed">
					The marketplace where companies list commission-based products and
					independent sales reps discover, track, and close deals.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 pt-4">
					<Link
						href="#"
						className={buttonVariants({
							variant: "brand",
							size: "lg",
							className:
								"flex-1 h-auto px-8 py-6 text-xl rounded-xl hover:-translate-y-1 transition-all",
						})}
					>
						I&rsquo;m a company
					</Link>
					<Link
						href="#"
						className={buttonVariants({
							variant: "dark",
							size: "lg",
							className:
								"flex-1 h-auto px-8 py-6 text-xl rounded-xl hover:-translate-y-1 transition-all",
						})}
					>
						I&rsquo;m a seller
					</Link>
				</div>
			</div>

			<div className="relative group mt-8 lg:mt-0">
				<div className="absolute -inset-4 bg-brand/10 rounded-[2rem] blur-2xl group-hover:bg-brand/20 transition-all duration-500" />
				<div className="relative bg-white border border-line rounded-2xl shadow-2xl overflow-hidden p-2">
					<Image
						src="/images/dashboardimg.png"
						alt="Clean modern SaaS dashboard interface showing sales pipeline, revenue charts, and reps directory"
						width={1200}
						height={900}
						className="w-full h-auto rounded-xl shadow-inner"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
