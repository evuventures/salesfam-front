import Hero from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";

export default function Home() {
	return (
		<main className="pt-24 md:pt-32 pb-20 space-y-20 md:space-y-32">
			<Hero />
			<ValueProps />
		</main>
	);
}
