"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RegisterPopu from "../commoneSections/RegisterPopu";
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
			<nav className="mx-auto flex max-w-site items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
				{/* Logo + Desktop Navigation */}
				<div className="flex min-w-0 items-center gap-6 md:gap-10">
					<Link
						href="/"
						className="flex shrink-0 items-center"
						onClick={closeMenu}
					>
						<Image
							src="/images/logo.png"
							width={80}
							height={20}
							alt="Logo"
							priority
							className="h-auto w-[70px] sm:w-[80px]"
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden items-center gap-6 text-sm font-medium text-mute md:flex lg:gap-8">
						{NAV_LINKS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="nav-link relative whitespace-nowrap py-1 transition-colors hover:text-ink"
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>

				{/* Right Actions */}
				<div className="flex shrink-0 items-center gap-2 sm:gap-4">
					{/* Desktop Login */}
					<Link
						href="/login"
						className="hidden rounded-full border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-300 hover:text-white hover:shadow-lg hover:shadow-blue-200 active:scale-95 sm:px-5 md:inline-flex"
					>
						Login
					</Link>

					{/* Desktop Register */}
					<div className="hidden md:block">
						<RegisterPopu />
					</div>

					{/* Mobile Menu Button */}
					<Button
						type="button"
						variant="ghost"
						className="h-10 w-10 p-0 text-ink md:hidden"
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
				<div className="border-b border-line bg-white px-4 py-5 shadow-sm md:hidden sm:px-6">
					<div className="flex flex-col gap-2">
						{NAV_LINKS.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								onClick={closeMenu}
								className="rounded-lg px-3 py-2.5 text-sm font-medium text-mute transition-colors hover:bg-blue-50 hover:text-blue-600"
							>
								{item.label}
							</Link>
						))}

						<hr className="my-2 border-line" />
						<div className="flex gap-2">
							{/* Mobile Login */}
							<Link
								href="/login"
								className=" w-25 text-center rounded-full border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-300 hover:text-white hover:shadow-lg hover:shadow-blue-200 active:scale-95 sm:px-5 md:inline-flex"
							>
								Login
							</Link>

							{/* Mobile Register */}
							<RegisterPopu />
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
