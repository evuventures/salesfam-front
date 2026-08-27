import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

interface LayoutProps {
	children: React.ReactNode;
}

export default function RegisterLayout({ children }: LayoutProps) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />

			<main className="flex-1">{children}</main>

			<Footer />
		</div>
	);
}
