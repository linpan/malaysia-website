// app/about-us/page.tsx

'use client';

import Grid from '@/components/svg/grid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type React from 'react';

const AboutPage: React.FC = () => {
  const leftAccordionData = [
    {
      value: 'item-93',
      question:
        'How does JetBrains Al Assistant compare to other Al assistants？',
      answer:
        'JetBrains AI Assistant is a collection of specific features in different JetBrains products, such as our IDEs, that become available to users through access to the JetBrains AI service.\n' +
        '\n' +
        'These features are product-specific and extend JetBrains products in various ways.\n' +
        '\n' +
        'Our approach to building AI Assistant’s features focuses on two main aspects:',
    },
    {
      value: 'item-13',
      question:
        'How does JetBrains Al Assistant compare to other Al assistants？',
      answer:
        'JetBrains AI Assistant is a collection of specific features in different JetBrains products, such as our IDEs, that become available to users through access to the JetBrains AI service.\n' +
        '\n' +
        'These features are product-specific and extend JetBrains products in various ways.\n' +
        '\n' +
        'Our approach to building AI Assistant’s features focuses on two main aspects:',
    },

    {
      value: 'item-1',
      question: 'What is the JetBrains AI Assistant?',
      answer:
        'JetBrains AI Assistant is a feature set integrated into JetBrains IDEs that provides AI-driven solutions to developers, improving productivity and code quality.',
    },
    {
      value: 'item-2',
      question: 'Is JetBrains AI Assistant free?',
      answer:
        'JetBrains AI Assistant is free for evaluation during its early access program, but it may become a paid feature as it matures.',
    },
    {
      value: 'item-3',
      question: 'Which JetBrains IDEs support AI Assistant?',
      answer:
        'AI Assistant is currently available in IntelliJ IDEA, WebStorm, PyCharm, and other flagship JetBrains IDEs.',
    },
  ];
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 mt-24">
        <Grid className={'opacity-30'} />
      </div>
      <div className="faq relative z-10 mx-auto mt-24 max-w-5xl gap-6 px-4 text-black sm:px-6 lg:mt-20 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base/7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="faq-section mx-auto mb-12 mt-6 max-w-3xl flex-col gap-6">
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
    </div>
  );
};

export default AboutPage;
