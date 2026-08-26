"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const NAV_LINKS = [
	{ label: "Marketplace", href: "/marketplace" },
	{ label: "Companies", href: "/companies" },
	{ label: "Sellers", href: "/sellers" },
	{ label: "Pricing", href: "/pricing" },
];

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header className="fixed left-0 top-0 z-50 w-full border-b border-line bg-white/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4">
				{/* Logo + Desktop Navigation */}
				<div className="flex items-center gap-10">
					<Link href="/" className="flex items-center" onClick={closeMenu}>
						<Image
							src="/images/logo.png"
							width={80}
							height={20}
							alt="Logo"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden items-center gap-8 text-sm font-medium text-mute md:flex">
						{NAV_LINKS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="nav-link relative py-1 transition-colors hover:text-ink"
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>

				{/* Right Actions */}
				<div className="flex items-center gap-4">
					<Link
						href="/login"
						className="hidden text-sm font-semibold text-mute transition-colors hover:text-ink sm:block"
					>
						Login
					</Link>

					<Link href="/register" className="hidden sm:block">
						<Button variant="brand" className="py-5">
							Get Started
						</Button>
					</Link>

					{/* Mobile Menu Button */}
					<Button
						type="button"
						variant="ghost"
						className="text-ink md:hidden"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((open) => !open)}
					>
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</div>
			</nav>

			{/* Mobile Navigation */}
			{menuOpen && (
				<div className="border-b border-line bg-white px-6 py-5 md:hidden">
					<div className="flex flex-col gap-4">
						{NAV_LINKS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								onClick={closeMenu}
								className="text-sm font-medium text-mute transition-colors hover:text-ink"
							>
								{item.label}
							</Link>
						))}

						<hr className="border-line" />

						<Link
							href="/login"
							onClick={closeMenu}
							className="text-sm font-medium text-mute hover:text-ink"
						>
							Login
						</Link>

						<Link href="/register" onClick={closeMenu} className="sm:hidden">
							<Button variant="brand" className="w-full py-5">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
