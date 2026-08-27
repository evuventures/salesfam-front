"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../ui/dialog";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setError("");

		// Remember Me validation
		if (!rememberMe) {
			setError("Please select Remember Me before signing in.");
			return;
		}

		console.log({
			email,
			password,
			rememberMe,
		});

		// Login API call here
	};

	return (
		<div className="mt-18 flex min-h-screen items-center justify-center bg-gray-100 p-4">
			<div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
				{/* Left Side - Image */}
				<div className="relative hidden `min-h-[650px]` w-1/2 md:block">
					<Image
						src="/images/login.png"
						alt="SalesFam Login"
						fill
						className="object-cover"
						priority
					/>

					<div className="absolute inset-0 bg-black/40" />

					<div className="absolute bottom-10 left-10 right-10 text-white">
						<h1 className="text-4xl font-bold">Welcome Back!</h1>

						<p className="mt-3 text-lg text-gray-200">
							Sign in to your SalesFam account and continue growing your
							business.
						</p>
					</div>
				</div>

				{/* Right Side - Form */}
				<div className="flex w-full items-center justify-center p-8 md:w-1/2 lg:p-14">
					<div className="w-full max-w-md">
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-gray-900">Sign In</h2>

							<p className="mt-2 text-gray-500">
								Enter your credentials to access your account.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-5">
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
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="you@example.com"
									required
									className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
								/>
							</div>

							{/* Password */}
							<div>
								<div className="mb-2 flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700"
									>
										Password
									</label>

									<a
										href="/forgot-password"
										className="text-sm font-medium text-blue-600 hover:text-blue-700"
									>
										Forgot password?
									</a>
								</div>

								<div className="relative">
									<input
										id="password"
										type={showPassword ? "text" : "password"}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Enter your password"
										required
										className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
									/>

									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-800"
									>
										{showPassword ? "Hide" : "Show"}
									</button>
								</div>
							</div>

							{/* Remember Me */}
							<div>
								<div className="flex items-center gap-2">
									<input
										id="remember"
										type="checkbox"
										checked={rememberMe}
										onChange={(e) => setRememberMe(e.target.checked)}
										className="h-4 w-4 cursor-pointer rounded border-gray-300"
									/>

									<label
										htmlFor="remember"
										className="cursor-pointer text-sm text-gray-600"
									>
										Remember me
									</label>
								</div>

								{/* Validation Error */}
								{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
							</div>

							{/* Submit */}
							<button
								type="submit"
								className="w-full cursor-pointer rounded-lg bg-blue-300 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
							>
								Sign In
							</button>
						</form>

						{/* Register */}
						<Dialog>
							<DialogTrigger>
								<div className="flex items-center gap-2 mt-2">
									<p>Don't have an account?</p>
									<p className=" cursor-pointer text-blue-700 hover:underline hover:text-blue-800">
										Create account
									</p>
								</div>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader>
									<DialogTitle>Create an Account</DialogTitle>
									<DialogDescription>
										Choose your account type.
									</DialogDescription>
								</DialogHeader>

								<div className="space-y-3">
									<Link
										href="/register/company"
										className="block rounded-xl border p-4 hover:bg-blue-50"
									>
										🏢 <strong>Company Registration</strong>
										<p className="text-sm text-gray-500">
											Register as a company.
										</p>
									</Link>

									<Link
										href="/register/sales-representative"
										className="block rounded-xl border p-4 hover:bg-blue-50"
									>
										👨‍💼 <strong>Sales Representative Registration</strong>
										<p className="text-sm text-gray-500">
											Register as a sales representative.
										</p>
									</Link>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</div>
		</div>
	);
}
