import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
