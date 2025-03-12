'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqData = [
    {
      value: 'item-1',
      question: '1. How does TalentPioneer help me find a job?',
      answer:
        'TalentPioneer assists you in finding a job by connecting you with top employers actively looking for candidates with your skills. As a headhunter, we provide personalized support throughout your job search, including resume optimization, interview coaching, and access to exclusive job openings. Our goal is to match you with opportunities that align with your career aspirations and help you stand out in the hiring process.',
    },
    {
      value: 'item-2',
      question: '2. How can I receive job notifications from TalentPioneer?',
      answer:
        'You can receive job notifications from TalentPioneer by signing up on our website and creating a profile. Once your profile is set up, you can customize your job preferences, and we\'ll send you email alerts for job openings that match your criteria.',
    },
    {
      value: 'item-3',
      question: "3. Do I need to pay for TalentPioneer's job-seeking services?",
      answer:
        "No, you do not need to pay for TalentPioneer's job-seeking services. Our services are completely free for candidates, as our goal is to help you find the right job without any cost to you.",
    },
    {
      value: 'item-4',
      question: '4. How does TalentPioneer protect my personal data?',
      answer:
        'TalentPioneer takes your privacy seriously and implements strict measures to protect your personal data. We use secure systems to store your information and ensure that it is only accessible to authorized personnel. Additionally, we comply with data protection regulations and do not share your information with third parties without your consent. Your trust is important to us, and we are committed to keeping your data safe.',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-20 text-base sm:text-lg md:py-28 lg:py-32">
      <section
        id="faq"
        className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <h2 className="text-3xl font-bold text-brandSecondary sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4 text-brandSecondary sm:gap-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map(({ question, answer, value }) => (
                <AccordionItem
                  key={value}
                  value={value}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger
                    className="px-3 py-4 text-left text-base font-bold text-brandSecondary sm:px-4 sm:text-lg md:text-xl">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-4 text-base leading-relaxed sm:px-4 sm:text-lg">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};
