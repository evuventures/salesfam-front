"use client";

import Link from "next/link";
import { useState } from "react";

export default function CompanyRegistrationForm() {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			// TODO: API integration
			console.log("Company registration submitted");
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
						Company Registration
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Create your company account and start growing your distribution.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
				>
					{/* Account Credentials */}
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
									placeholder="Company username"
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
									placeholder="company@example.com"
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

					{/* Business Information */}
					<section>
						<h2 className="text-lg font-semibold text-gray-900">
							Business Information
						</h2>

						<p className="mt-1 text-sm text-gray-500">
							Provide your official company information.
						</p>

						<div className="mt-5 grid gap-5 sm:grid-cols-2">
							{/* Company Name */}
							<div className="sm:col-span-2">
								<label
									htmlFor="companyName"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Company Name
								</label>

								<input
									id="companyName"
									name="companyName"
									type="text"
									required
									placeholder="Your company name"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Tax ID */}
							<div>
								<label
									htmlFor="taxId"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Tax ID
								</label>

								<input
									id="taxId"
									name="taxId"
									type="text"
									required
									placeholder="CIF / VAT / EIN"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

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
									placeholder="+1 234 567 890"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Physical Address */}
							<div className="sm:col-span-2">
								<label
									htmlFor="address"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Physical Address
								</label>

								<textarea
									id="address"
									name="address"
									required
									rows={3}
									placeholder="Enter your company physical address"
									className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>
						</div>
					</section>

					<hr className="my-8 border-gray-200" />

					{/* Financial Details */}
					<section>
						<h2 className="text-lg font-semibold text-gray-900">
							Financial Details
						</h2>

						<p className="mt-1 text-sm text-gray-500">
							Bank details are required for payout disbursements.
						</p>

						<div className="mt-5 grid gap-5 sm:grid-cols-2">
							{/* Bank Name */}
							<div>
								<label
									htmlFor="bankName"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Bank Name
								</label>

								<input
									id="bankName"
									name="bankName"
									type="text"
									required
									placeholder="Bank name"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Account Name */}
							<div>
								<label
									htmlFor="accountName"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Account Name
								</label>

								<input
									id="accountName"
									name="accountName"
									type="text"
									required
									placeholder="Account holder name"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Account Number */}
							<div>
								<label
									htmlFor="accountNumber"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Account Number
								</label>

								<input
									id="accountNumber"
									name="accountNumber"
									type="text"
									required
									placeholder="Bank account number"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* SWIFT / Routing */}
							<div>
								<label
									htmlFor="routingNumber"
									className="mb-2 block text-sm font-medium text-gray-700"
								>
									Routing / SWIFT Code
								</label>

								<input
									id="routingNumber"
									name="routingNumber"
									type="text"
									required
									placeholder="Routing or SWIFT code"
									className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
						{loading ? "Creating Account..." : "Create Company Account"}
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
