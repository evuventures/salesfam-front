import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
	{
		title: "Product",
		links: ["Marketplace", "CRM Tools", "Pricing"],
	},
	{
		title: "Account",
		links: ["I'm a company", "I'm a seller", "Login"],
	},
	{
		title: "Support",
		links: ["Help Center", "Privacy Policy", "Terms of Service"],
	},
];

export function Footer() {
	return (
		<footer className="border-t border-line bg-white pt-24 pb-12">
			<div className="max-w-site mx-auto px-6">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
					<div className="space-y-6">
						<Link
							href="/"
							className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink"
						>
							<div className="w-auto h-auto flex items-center justify-center">
								<Image
									src="/images/logo.png"
									width="90"
									height="20"
									alt="logo"
								/>
							</div>
						</Link>
						<p className="text-mute leading-relaxed">
							Empowering companies and independent sellers to grow distribution
							through trust and transparency.
						</p>
					</div>

					{FOOTER_COLUMNS.map((column) => (
						<div key={column.title}>
							<h5 className="font-bold text-ink mb-6">{column.title}</h5>
							<ul className="space-y-4 text-mute font-medium">
								{column.links.map((link) => (
									<li key={link}>
										<Link
											href="#"
											className="hover:text-brand transition-colors"
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-faint text-sm">
						© 2026 Salesfam. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
