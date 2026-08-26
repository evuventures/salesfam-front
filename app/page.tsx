import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { Faq } from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ValueProps } from "@/components/sections/ValueProps";

export default function Home() {
	return (
		<>
			<Header />
			<main className="pt-24 md:pt-32 pb-20 space-y-20 md:space-y-32">
				<Hero />
				<ValueProps />
				<HowItWorks />
				<Faq />
			</main>
			<Footer />
		</>
	);
}
