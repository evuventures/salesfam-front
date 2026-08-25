import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "How do commissions work?",
        answer: "Companies set their own commission structures (percentage or flat fee) for each product. Sellers can see these rates upfront in the Marketplace before choosing to promote a product.",
    },
    {
        question: "How do payouts work?",
        answer: "Payouts are automated and handled by Salesfam. Once a sale is verified and the return period (if any) has passed, funds are released directly to your chosen payout method.",
    },
    {
        question: "Do I need a company to join as a seller?",
        answer: "No. Anyone can join as an independent sales representative. Whether you're an individual freelancer or a small agency, you can use Salesfam to discover and sell products.",
    },
    {
        question: "How does tracking work?",
        answer: "We use a combination of unique tracking links, cookies, and fingerprinting to ensure every sale is accurately attributed to the correct rep. Companies get a full dashboard to see exactly where sales are coming from.",
    },
];

export function Faq() {
    return (
        <section id="faq" className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold tracking-tight text-ink">
                    Got questions? We&rsquo;ve got answers.
                </h2>
            </div>

            <Accordion className="space-y-4 border-none ">
                {FAQS.map(({ question, answer }, index) => (
                    <AccordionItem
                        key={question}
                        value={`faq-${index}`}
                        className="border border-line rounded-2xl bg-white px-6 data-[state=open]:shadow-md transition-all"
                    >
                        <AccordionTrigger className="font-bold text-ink text-lg hover:no-underline py-4">
                            {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-mute leading-relaxed pb-4">
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
