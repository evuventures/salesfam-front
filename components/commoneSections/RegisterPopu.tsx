/** biome-ignore-all lint/a11y/useButtonType: DialogTrigger supplies the interactive button wrapper */

import Link from "next/link";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

const RegisterPopu = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger>
					{/* <p className="rounded-full border border-blue-300 px-5 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-300 hover:text-white hover:shadow-lg hover:shadow-blue-200 active:scale-95">
            Register
          </p> */}
					<button
						type="button"
						className="rounded-full border border-blue-300 px-5 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-300 hover:text-white hover:shadow-lg hover:shadow-blue-200 active:scale-95"
					>
						Register
					</button>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create an Account</DialogTitle>
						<DialogDescription>Choose your account type.</DialogDescription>
					</DialogHeader>

					<div className="space-y-3">
						<Link
							href="/register/company"
							className="block rounded-xl border p-4 hover:bg-blue-50"
						>
							🏢 <strong>Company Registration</strong>
							<p className="text-sm text-gray-500">Register as a company.</p>
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
	);
};

export default RegisterPopu;
