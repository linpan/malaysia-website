import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
	const leftAccordionData = [
		{
			value: "item-93",
			question:
				"How does JetBrains Al Assistant compare to other Al assistants？",
			answer:
				"JetBrains AI Assistant is a collection of specific features in different JetBrains products, such as our IDEs, that become available to users through access to the JetBrains AI service.\n" +
				"\n" +
				"These features are product-specific and extend JetBrains products in various ways.\n" +
				"\n" +
				"Our approach to building AI Assistant’s features focuses on two main aspects:",
		},
		{
			value: "item-13",
			question:
				"How does JetBrains Al Assistant compare to other Al assistants？",
			answer:
				"JetBrains AI Assistant is a collection of specific features in different JetBrains products, such as our IDEs, that become available to users through access to the JetBrains AI service.\n" +
				"\n" +
				"These features are product-specific and extend JetBrains products in various ways.\n" +
				"\n" +
				"Our approach to building AI Assistant’s features focuses on two main aspects:",
		},

		{
			value: "item-1",
			question: "What is the JetBrains AI Assistant?",
			answer:
				"JetBrains AI Assistant is a feature set integrated into JetBrains IDEs that provides AI-driven solutions to developers, improving productivity and code quality.",
		},
		{
			value: "item-2",
			question: "Is JetBrains AI Assistant free?",
			answer:
				"JetBrains AI Assistant is free for evaluation during its early access program, but it may become a paid feature as it matures.",
		},
		{
			value: "item-3",
			question: "Which JetBrains IDEs support AI Assistant?",
			answer:
				"AI Assistant is currently available in IntelliJ IDEA, WebStorm, PyCharm, and other flagship JetBrains IDEs.",
		},
	];

	return (
		<div className="bg-background bg-gray-50">
			<section id="faq" className="container max-w-3xl py-12 sm:py-20">
				<div className="mb-8 text-center">
					<h2 className="text-center text-3xl font-bold md:text-4xl">
						Assistant FAQ
					</h2>
				</div>

				<div className="grid gap-8 md:grid-cols-1">
					<div className="flex flex-col gap-6">
						<Accordion type="single" collapsible>
							{leftAccordionData.map(({ question, answer, value }) => (
								<AccordionItem key={value} value={value}>
									<AccordionTrigger className="text-left text-base font-bold">
										{question}
									</AccordionTrigger>
									<AccordionContent>{answer}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</div>
	);
};
