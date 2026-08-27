"use client";

import Link from "next/link";
import { useState } from "react";

export default function SalesRepresentativeRegistrationForm() {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			// TODO: API integration
			console.log("Sales representative registration submitted");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 px-4 py-24 sm:px-6">
			<div className="mx-auto max-w-2xl">
				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Sales Representative Registration
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Create your account and join the SalesFam sales network.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
				>
					{/* Account Information */}
					<section>
						<h2 className="text-lg font-semibold text-gray-900">
							Account Information
						</h2>

						<p className="mt-1 text-sm text-gray-500">
							Enter your login credentials.
						</p>

						<div className="mt-5 grid gap-5 sm:grid-cols-2">
							{/* Username */}
							<div>
								<label
									htmlFor="username"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Username
								</label>

								<input
									id="username"
									name="username"
									type="text"
									required
									placeholder="Enter username"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Email Address
								</label>

								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="you@example.com"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Password */}
							<div className="sm:col-span-2">
								<label
									htmlFor="password"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Password
								</label>

								<input
									id="password"
									name="password"
									type="password"
									required
									minLength={8}
									placeholder="Minimum 8 characters"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>
						</div>
					</section>

					<hr className="my-8 border-gray-200" />

					{/* Personal Information */}
					<section>
						<h2 className="text-lg font-semibold text-gray-900">
							Personal Information
						</h2>

						<p className="mt-1 text-sm text-gray-500">
							Provide your residential and contact information.
						</p>

						<div className="mt-5 space-y-5">
							{/* Phone */}
							<div>
								<label
									htmlFor="phone"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Phone Number
								</label>

								<input
									id="phone"
									name="phone"
									type="tel"
									required
									placeholder="+880 1XXXXXXXXX"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Residential Address */}
							<div>
								<label
									htmlFor="residentialAddress"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Residential Address
								</label>

								<textarea
									id="residentialAddress"
									name="residentialAddress"
									required
									rows={4}
									placeholder="Enter your residential address"
									className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>
						</div>
					</section>

					{/* Submit */}
					<button
						type="submit"
						disabled={loading}
						className="mt-8 w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{loading
							? "Creating Account..."
							: "Create Sales Representative Account"}
					</button>

					{/* Login */}
					<p className="mt-5 text-center text-sm text-gray-500">
						Already have an account?{" "}
						<Link
							href="/login"
							className="font-semibold text-blue-600 hover:text-blue-700"
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
