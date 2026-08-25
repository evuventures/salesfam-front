"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = ["Marketplace", "Companies", "Sellers", "Pricing"];

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-line">
			<nav className="max-w-site mx-auto px-6 py-4 flex items-center justify-between">
				<div className="flex items-center gap-10">
					<Link
						href="/"
						className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink"
					>
						<div className="w-auto h-auto flex items-center justify-center">
							<Image src="/images/logo.png" width="80" height="20" alt="logo" />
						</div>
					</Link>
					<div className="hidden md:flex items-center gap-8 text-sm font-medium text-mute">
						{NAV_LINKS.map((label) => (
							<Link key={label} href="#" className="nav-link relative py-1">
								{label}
							</Link>
						))}
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Link
						href="#"
						className="hidden sm:block text-sm font-semibold text-mute hover:text-ink transition-colors"
					>
						Log in
					</Link>
					<button className="bg-brand hover:bg-brand/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all">
						Get Started
					</button>
					<button
						className="md:hidden text-ink text-xl"
						aria-label="Toggle menu"
						onClick={() => setMenuOpen((open) => !open)}
					>
						{menuOpen ? <X /> : <Menu />}
					</button>
				</div>
			</nav>

			{menuOpen && (
				<div className="md:hidden bg-white border-b border-line px-6 py-4 space-y-4">
					{NAV_LINKS.map((label) => (
						<Link key={label} href="#" className="block text-mute font-medium">
							{label}
						</Link>
					))}
					<hr className="border-line" />
					<Link href="#" className="block text-mute font-medium">
						Log in
					</Link>
				</div>
			)}
		</header>
	);
}
